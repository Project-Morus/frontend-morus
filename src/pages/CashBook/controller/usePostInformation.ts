import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { currentDateFormatted } from "../../../helpers/date";

const schema = z.object({
  valor: z.string().nonempty("Valor é obrigatório"),
  categoria: z.string().max(300).nonempty("Categoria é obrigatória"),
  tipo: z.boolean(),
  torre: z.string().nonempty("Torre é obrigatória"),
  descricao: z.string().nonempty("Descrição é obrigatória"),
  dataTransacao: z.string(),
});

type FormData = z.infer<typeof schema>;

export function usePostCashBook() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      dataTransacao: currentDateFormatted(),
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
