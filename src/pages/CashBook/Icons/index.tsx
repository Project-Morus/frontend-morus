import { useState } from "react";
import { Icon, Input, Modal } from "../../../components";
import { InputContainerSC } from "./styles";
import { CardInformationProps } from "../../Home/parts/types";

export const IconsSC = (data: CardInformationProps) => {
  const [openedDeleteModal, setOpenedDeleteModal] = useState<boolean>(false);
  const [openedEditModal, setOpenedEditModal] = useState<boolean>(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(data.descricao);

  const handleOpenDeleteModal = () => {
    setOpenedDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    console.log(data);
    setOpenedDeleteModal(false);
  };

  const handleOpenEditModal = () => {
    setOpenedEditModal(true);
  };

  const handleCloseEditModal = () => {
    console.log(data);
    setOpenedEditModal(false);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "0.8rem" }}>
        <Icon name="ph-pencil-simple-line" size="20" onClick={handleOpenEditModal} />
        <Icon name="ph-trash" color="#CE323B" size="20" onClick={handleOpenDeleteModal} />
      </div>

      <Modal
        open={openedDeleteModal}
        closeModal={handleCloseDeleteModal}
        variant="warning"
        onConfirmModal={handleCloseDeleteModal}
        onCancelModal={handleCloseDeleteModal}
      >
        <p>
          Tem certeza que deseja excluir o item da lista do Livro caixa do condôminio Ilha de Capri? Esta ação não
          poderá ser desfeita.
        </p>
      </Modal>

      <Modal
        open={openedEditModal}
        closeModal={handleCloseEditModal}
        variant="form"
        iconName="ph-newspaper"
        modalTitle="Editar Informação"
        buttonLabel="Confirmar Edição"
        onConfirmModal={handleCloseEditModal}
        onCancelModal={handleCloseEditModal}
      >
        <InputContainerSC>
          <Input id={"titleInput"} label={"Título"} onChange={handleTitleChange} />
          <Input id={"descriptionInput"} label={"Descrição"} onChange={handleDescriptionChange} />
        </InputContainerSC>
      </Modal>
    </>
  );
};