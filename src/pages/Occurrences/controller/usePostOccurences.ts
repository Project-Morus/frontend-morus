import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ocurrenceService } from "../../../services/ocurrenceService";
import { completedDate } from "../../../helpers/date";

const schema = z.object({
  titulo: z.string().nonempty("Titulo é obrigatório"),
  descricao: z.string().max(300).nonempty("Descrição é obrigatório"),
  dataCadastro: z.string(),
  idUsuario: z.number().int().min(0),
  resolvido: z.boolean()
})

type FormData = z.infer<typeof schema>;

export function usePostOcurrences() {
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    watch
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      dataCadastro: completedDate,
      idUsuario: 2,
      resolvido: true,
    }
  })

  const { mutateAsync, isLoading, isSuccess } = useMutation({
    mutationFn: (data: FormData) => {
      return ocurrenceService.postOcurrences(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ocurrence-list'] })
    }
  });


  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data)

      toast.success('Ocorrência cadastrada com sucesso!')
    } catch (error) {
      toast.error('Verifique os seus campos!')
    }
  })

  return { register, handleSubmit, control, errors, watch, isLoading, isSuccess }
}
