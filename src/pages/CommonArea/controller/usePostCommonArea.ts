import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commonAreasService } from "../../../services/commonAreas";

const schema = z.object({
  nome: z.string().nonempty("Nome é obrigatório"),
  limite: z.number().int().min(0),
});

type FormData = z.infer<typeof schema>;

interface PostCommonAreaProps {
  handleModalClosed: () => void;
}

export function usePostCommonArea({ handleModalClosed }: PostCommonAreaProps) {
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
      nome: "",
      limite: 1,
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: FormData) => {
      return commonAreasService.postCommonAreas(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["common-area-list"] });
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);

      toast.success("Área comum cadastrada com sucesso!");

      handleModalClosed();

      reset();
    } catch (error) {
      toast.error("Verifique os seus campos!");
    }
  });

  return { register, handleSubmit, control, errors, watch, isPending };
}
