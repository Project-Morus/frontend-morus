import { useMutation, useQueryClient } from "@tanstack/react-query";
import { commonAreasService } from "../../../services/commonAreas";
import toast from "react-hot-toast";
import { useModal } from "../../../hooks";

export function useDeleteCommonArea() {
  const queryClient = useQueryClient();

  const { isShowing: isShowingDelete, handleModalOpened: deleteOpened, handleModalClose: deleteClosed } = useModal();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (id: number) => {
      return commonAreasService.deleteCommonAreas({ id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["common-area-list"] });
    },
  });

  const handleDelete = async (id: number) => {
    try {
      await mutateAsync(id);

      toast.success("Área comum deletada com sucesso!");

      deleteClosed();
    } catch (error) {
      toast.error("Ops! Tente novamente mais tarde!");
    }
  };

  return { handleDelete, isShowingDelete, deleteOpened, deleteClosed, isPending };
}
