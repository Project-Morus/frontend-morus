import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ocurrenceService } from "../../../services/ocurrenceService";
import { completedDate } from "../../../helpers/date";

const schema = z.object({
  titulo: z.string().min(1, "Titulo é obrigatório"),
  descricao: z.string().min(1, "Descrição é obrigatório").max(300),
  dataCadastro: z.string(),
  idUsuario: z.number().int().min(0),
  resolvido: z.boolean(),
});

type FormData = z.infer<typeof schema>;

interface PostOccurrencesProps {
  handleModalClosed: () => void;
}

export function usePostOcurrences({ handleModalClosed }: PostOccurrencesProps) {
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
      dataCadastro: completedDate,
      idUsuario: 2,
      resolvido: false,
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: FormData) => {
      return ocurrenceService.postOcurrences(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ocurrence-list"] });
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);

      toast.success("Ocorrência cadastrada com sucesso!");

      handleModalClosed();

      reset();
    } catch (error) {
      toast.error("Verifique os seus campos!");
    }
  });

  return { register, handleSubmit, control, errors, watch, isPending };
}
