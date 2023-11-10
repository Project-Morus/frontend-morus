import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useModal } from "../../../hooks";
import { monthlyFeeService } from "../../../services/monthlyFeeService";
import { completedDate } from "../../../helpers/date";

const schema = z.object({
  nome: z.string().min(1, "Tema é obrigatório"),
  descricao: z.string().min(1, "Descrição é obrigatório").max(300),
  valor: z.coerce.number().min(1, "Valor da taxa é obrigatório").int().positive(),
  recorrente: z.boolean(),
  dataInicio: z.string(),
  dataFim: z.string(),
})

export type FormData = z.infer<typeof schema>;

export function usePostMonthlyFee() {
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
    defaultValues: {
      dataInicio: completedDate
    }
  })

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: FormData) => {
      return monthlyFeeService.postMonthlyFee(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['monthlyFee-list'] })
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
