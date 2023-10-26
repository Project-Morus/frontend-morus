import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useModal } from "../../../hooks";
import { informationService } from "../../../services/informationService";

export function useDeleteInformation() {
  const queryClient = useQueryClient();

  const { isShowing: isShowingDelete, handleModalOpened: deleteOpened, handleModalClose: deleteClosed } = useModal();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (id: number) => {
      return informationService.deleteInformation({ id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["information-list"] });
    },
  });

  const handleDelete = async (id: number) => {
    try {
      await mutateAsync(id);

      toast.success("Informação deletada com sucesso!");

      deleteClosed();
    } catch (error) {
      toast.error("Ops! Tente novamente mais tarde!");
    }
  };

  return { handleDelete, isShowingDelete, deleteOpened, deleteClosed, isPending };
}
