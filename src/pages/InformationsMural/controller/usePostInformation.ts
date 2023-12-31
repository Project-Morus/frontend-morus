import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { informationService } from "../../../services/informationService";
import { useGetInformations } from "./useGetInformations";

const schema = z.object({
  titulo: z.string().nonempty("Titulo é obrigatório"),
  descricao: z.string().max(300).nonempty("Descrição é obrigatória"),
  ativo: z.boolean(),
});

type FormData = z.infer<typeof schema>;

interface PostInformationProps {
  handleModalClosed: () => void;
}

export function usePostInformation({ handleModalClosed }: PostInformationProps) {
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
      ativo: true,
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: FormData) => {
      return informationService.postInformation(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["informations-list"] });
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);

      toast.success("Informação cadastrada com sucesso!");

      handleModalClosed();

      reset();
    } catch (error) {
      toast.error("Verifique os seus campos!");
    }
  });

  return { register, handleSubmit, control, errors, watch, isPending };
}
