import { useState } from "react";
import { Icon, Modal } from "../../../components";

export const IconsSC = () => {
  const [opened, setOpened] = useState<boolean>(false)

  const handleOpenedModal = () => {
    setOpened(!opened)
  }

  const handleClosedModal = () => {
    setOpened(false)
  }

  return (
    <>

      <div style={{ display: "flex", gap: "0.8rem" }}>
        <Icon name="ph-pencil-simple-line" size="20" onClick={() => console.log('Action Edit')} />
        <Icon name="ph-trash" color="#CE323B" size="20" onClick={handleOpenedModal} />
      </div>

      <Modal
        open={opened}
        closeModal={handleClosedModal}
        variant="warning"
        onConfirmModal={() => console.log('Confirme Delete')}>
        <p>Tem certeza que deseja excluir o item da lista do Livro caixa do condôminio Ilha de Capri? Esta ação não poderá ser desfeita.</p>
      </Modal>
    </>
  );
};