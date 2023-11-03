import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useModal } from "../../../hooks";
import { votesService } from "../../../services/votesService";

export function useDeleteVote(id: number) {
  const queryClient = useQueryClient()

  const {
    isShowing: isShowingDelete,
    handleModalOpened: deleteOpened,
    handleModalClose: deleteClosed } = useModal()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: () => {
      return votesService.deleteVote({ id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['votes-list'] })
    }
  });

  const handleDelete = async () => {
    try {
      await mutateAsync()

      toast.success('Tema deletado com sucesso!')

      deleteClosed()
    } catch (error) {
      toast.error('Ops! Tente novamente mais tarde!')
    }
  }

  return { handleDelete, isShowingDelete, deleteOpened, deleteClosed, isPending }
}