import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { currentDateFormatted } from "../../../helpers/date";

const schema = z.object({
  titulo: z.string().nonempty("Titulo é obrigatório"),
  descricao: z.string().max(300).nonempty("Descrição é obrigatória"),
  ativo: z.boolean(),
  dataCadastro: z.string(),
  dataAlteracao: z.string(),
});

type FormData = z.infer<typeof schema>;

export function usePostInformation() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      dataCadastro: currentDateFormatted(),
    },
  });

  const handeSubmit = hookFormSubmit(async (data) => {
    console.log(data);
    // try {
    //   await mutateAsync(data)

    //   toast.success('Ocorrência cadastrada com sucesso!')
    // } catch (error) {
    //   console.log(error)
    //   toast.error('Verifique os seus campos!')
    // }
  });

  return { register, handeSubmit, errors };
}
