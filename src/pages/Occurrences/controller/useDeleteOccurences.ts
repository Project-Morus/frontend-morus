import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ocurrenceService } from "../../../services/ocurrenceService";
import toast from "react-hot-toast";

export function useDeleteOcurrences() {
  const queryClient = useQueryClient()

  const { mutateAsync } = useMutation({
    mutationFn: (id: number) => {
      return ocurrenceService.deleteOcurrences({ id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ocurrence-list'] })
    }
  });

  const handleDelete = async (id: number) => {
    try {
      await mutateAsync(id)

      toast.success('Ocorrência deletada com sucesso!')
    } catch (error) {
      toast.error('Ops! Tente novamente mais tarde!')
    }
  }

  return { handleDelete }
}