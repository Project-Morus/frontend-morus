import { useState } from "react";
import { Icon, Input, Modal } from "../../../../components";
import { InputContainerSC } from "./styles";
import { CardInformationProps } from "../../../Home/parts/types";
import { httpClient } from "../../../../services/httpClient";

export const IconsSC = (data: CardInformationProps) => {
  const [openedDeleteModal, setOpenedDeleteModal] = useState<boolean>(false);
  const [openedEditModal, setOpenedEditModal] = useState<boolean>(false);

  const [title, setTitle] = useState(data.titulo);
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

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleConfirmEditInfo = () => {
    async function fetchData() {
      try {
        console.log("entrou no try");
        await httpClient.put("api/AtualizarInformacao", {
          method: "PUT",
          body: {
            id: data.id,
            titulo: data.titulo,
            descricao: data.descricao,
            id_condominio: data.id_condominio,
            userId: data.userId,
            ativo: data.ativo,
            dataCadastro: data.dataCadastro,
            dataAlteracao: data.dataAlteracao,
          },
        });
      } catch (error) {
        console.log("entrou no catch");
        console.error("Erro ao editar Informação:", error);
      }
    }

    fetchData();
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
        onConfirmModal={handleConfirmEditInfo}
        onCancelModal={handleCloseEditModal}
      >
        <InputContainerSC>
          <Input maxWidth={1000} id={"titleInput"} label={"Título"} onChange={handleTitleChange} value={title} />
          <Input
            maxWidth={1000}
            id={"descriptionInput"}
            label={"Descrição"}
            onChange={handleDescriptionChange}
            value={description}
          />
        </InputContainerSC>
      </Modal>
    </>
  );
};
