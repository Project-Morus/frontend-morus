import { useState } from "react";
import { Archive, Modal } from "../../components";


const LandingPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <h1>Landing Page</h1>
      <button onClick={handleModal}>Abrir modal</button>
      <Modal
        open={modalOpen}
        variant="form"
        onConfirmModal={() => { }}
        closeModal={() => setModalOpen(false)}
        iconName="ph-money"
        modalTitle="Cadastro Multa  :)"
        buttonLabel="Aceitar"
      >
        <Archive />
      </Modal>
    </>
  );
};

export default LandingPage;
