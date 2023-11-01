import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { cashBookService } from "../../../services/cashBookService";
import { useModal } from "../../../hooks";

export function useDeleteCashBook() {
  const queryClient = useQueryClient();

  const { isShowing: isShowingDelete, handleModalOpened: deleteOpened, handleModalClose: deleteClosed } = useModal();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (id: number) => {
      return cashBookService.deleteCashBook({ id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cash-book-list"] });
    },
  });

  const handleDelete = async (id: number) => {
    try {
      await mutateAsync(id);

      toast.success("Transação deletada com sucesso!");

      deleteClosed();
    } catch (error) {
      toast.error("Ops! Tente novamente mais tarde!");
    }
  };

  return { handleDelete, isShowingDelete, deleteOpened, deleteClosed, isPending };
}
