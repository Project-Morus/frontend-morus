import { useForm } from "react-hook-form";
import { z } from 'zod';
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query";
import { ocurrenceService } from "../../../services/ocurrenceService";
import { currentDateFormatted } from "../../../helpers/date";

const schema = z.object({
  titulo: z.string().nonempty('Titulo é obrigatório'),
  descricao: z.string().max(300).nonempty('Descrição é obrigatório'),
  dataCadastro: z.string(),
  idUsuario: z.number().int().min(0),
  resolvido: z.boolean()
})

type FormData = z.infer<typeof schema>

export function usePostOcurrences() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      dataCadastro: currentDateFormatted(),
      idUsuario: 2,
      resolvido: true,
    }
  })

  const { mutateAsync } = useMutation({
    mutationFn: (data: FormData) => {
      return ocurrenceService.postOcurrences(data)
    }
  });


  const handeSubmit = hookFormSubmit(async (data) => {

    console.log(data)
    // try {
    //   await mutateAsync(data)

    //   toast.success('Ocorrência cadastrada com sucesso!')
    // } catch (error) {
    //   console.log(error)
    //   toast.error('Verifique os seus campos!')
    // }
  })

  return { register, handeSubmit, errors }
}