import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useModal } from "../../../hooks";
import { monthlyFeeService } from "../../../services/monthlyFeeService";

export function useDeleteMonthlyFee(id: number) {
  const queryClient = useQueryClient()

  const {
    isShowing: isShowingDelete,
    handleModalOpened: deleteOpened,
    handleModalClose: deleteClosed } = useModal()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: () => {
      return monthlyFeeService.deleteMonthlyFee({ id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['monthlyFee-list'] })
    }
  });

  const handleDelete = async () => {
    try {
      await mutateAsync()

      toast.success('Taxa mensal excluída com sucesso!')

      deleteClosed()
    } catch (error) {
      toast.error('Ops! Tente novamente mais tarde!')
    }
  }

  return { handleDelete, isShowingDelete, deleteOpened, deleteClosed, isPending }
}