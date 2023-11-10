import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { votesService } from "../../../services/votesService";
import { useModal } from "../../../hooks";

const schema = z.object({
  tema: z.string().min(1, "Tema é obrigatório"),
  descricao: z.string().min(1, "Descrição é obrigatório").max(300),
  dataExpiracao: z.string(),
})

export type FormData = z.infer<typeof schema>;

export function usePostVotes() {
  const queryClient = useQueryClient()

  const {
    isShowing: isShowingPost,
    handleModalOpened: postOpened,
    handleModalClose: postClosed } = useModal()

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: FormData) => {
      return votesService.postVotes(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['votes-list'] })
    }
  });


  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data)

      toast.success('Votação criada com sucesso!')

      postClosed()

      reset()
    } catch (error) {
      toast.error('Verifique os seus campos!')
    }
  })

  return { register, handleSubmit, control, errors, isPending, isShowingPost, postOpened, postClosed }
}
