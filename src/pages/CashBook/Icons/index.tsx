import { useState } from "react";
import { Icon, Modal } from "../../../components";
import { InputContainerSC } from "./styles";
import { CardInformationProps } from "../../Home/parts/types";
import PostForm from "../parts/PostForm";
import { useDeleteCashBook } from "../controller";

export const IconsSC = (data: CardInformationProps) => {
  const [openedEditModal, setOpenedEditModal] = useState<boolean>(false);

  const { handleDelete, deleteOpened, isShowingDelete, deleteClosed, isPending } = useDeleteCashBook();

  const [id, setId] = useState<number>(0);

  const initiateDeletionProcess = (idOccurence: number) => {
    setId(idOccurence);

    deleteOpened();
  };

  const handleOpenEditModal = () => {
    setOpenedEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenedEditModal(false);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "0.8rem" }}>
        <Icon name="ph-pencil-simple-line" size="20" onClick={handleOpenEditModal} />
        <Icon name="ph-trash" color="#CE323B" size="20" onClick={() => initiateDeletionProcess(data.data.id)} />
      </div>

      <Modal
        open={isShowingDelete}
        isLoading={isPending}
        closeModal={deleteClosed}
        variant="warning"
        onConfirmModal={handleCloseDeleteModal}
      >
        <p>
          Tem certeza que deseja excluir a transação "{data.data.descricaoTransacao}" do livro caixa do condomínio Ilha
          de Capri? Esta ação não poderá ser desfeita.
        </p>
      </Modal>

      <Modal
        open={openedEditModal}
        closeModal={handleCloseEditModal}
        variant="form"
        iconName="ph-book-bookmark"
        modalTitle="Editar Transação"
        buttonLabel="Confirmar Edição"
        onConfirmModal={handleCloseEditModal}
      >
        <InputContainerSC>
          <PostForm />
        </InputContainerSC>
      </Modal>
    </>
  );
};
