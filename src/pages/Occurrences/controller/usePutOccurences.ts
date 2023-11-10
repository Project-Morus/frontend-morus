import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ocurrenceService } from "../../../services/ocurrenceService";
import toast from "react-hot-toast";
import { useModal } from "../../../hooks";

const schema = z.object({
  id: z.number(),
  titulo: z.string().min(1, "Titulo é obrigatório"),
  descricao: z.string().min(1, "Descrição é obrigatório").max(300),
  dataCadastro: z.string(),
  idUsuario: z.number().int().min(0),
  resolvido: z.boolean()
})

type FormData = z.infer<typeof schema>;

export function usePutOcurrences() {
  const queryClient = useQueryClient()

  const {
    isShowing: isShowingEdit,
    handleModalOpened: handleModalOpenedEdit,
    handleModalClose: handleModalClosedEdit } = useModal();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  })

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: FormData) => {
      return ocurrenceService.putOcurrences(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ocurrence-list'] })
    }
  });


  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data)

      toast.success('Ocorrência atualizada com sucesso!')

      handleModalClosedEdit()

      reset()
    } catch (error) {
      toast.error('Verifique os seus campos!')
    }
  })

  return { register, handleSubmit, control, errors, reset, isPending, isShowingEdit, handleModalOpenedEdit, handleModalClosedEdit }
}