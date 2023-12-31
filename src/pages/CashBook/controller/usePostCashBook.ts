import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cashBookService } from "../../../services/cashBookService";

const schema = z.object({
  descricaoTransacao: z.string().max(300).min(1, "Descrição é obrigatória"),
  categoria: z.string().max(300).min(1, "Categoria é obrigatória"),
  torre: z.string(),
  valorTransacao: z.number().int(),
  tipoTransacao: z.number().int(),
  dataTransacao: z.string().min(1, 'Data da transação é obrigatória')
});

type FormData = z.infer<typeof schema>;

interface PostCashBookProps {
  handleModalClosed: () => void;
}

export function usePostCashBook({ handleModalClosed }: PostCashBookProps) {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      tipoTransacao: 0,
      valorTransacao: 0,
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: FormData) => {
      return cashBookService.postCashBook(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cash-book-list"] });
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      console.log(data)
      await mutateAsync(data);

      toast.success("Transação cadastrada com sucesso!");

      handleModalClosed();

      reset();
    } catch (error) {
      console.log(data)
      toast.error("Verifique os seus campos!");
    }
  });

  return { register, handleSubmit, control, errors, watch, isPending };
}
