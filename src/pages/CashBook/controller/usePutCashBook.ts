import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useModal } from "../../../hooks";
import { cashBookService } from "../../../services/cashBookService";

const schema = z.object({
  id: z.number().int(),
  descricaoTransacao: z.string().min(1, "Tema é obrigatório"),
  categoria: z.string().min(1, "Descrição é obrigatório").max(300),
  torre: z.string(),
  valorTransacao: z.number(),
  dataTransacao: z.string(),
  tipoTransacao: z.number().int(),
});

export type FormData = z.infer<typeof schema>;

export function usePutCashBook() {
  const queryClient = useQueryClient();

  const { isShowing: isShowingEdit, handleModalOpened: putOpened, handleModalClose: putClosed } = useModal();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: FormData) => {
      return cashBookService.putCashBook(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cash-book-list"] });
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);

      toast.success("Taxa Mensal atualizada com sucesso!");

      putClosed();

      reset();
    } catch (error) {
      toast.error("Verifique os seus campos!");
    }
  });

  return { register, handleSubmit, control, errors, isPending, isShowingEdit, putOpened, putClosed, reset };
}
