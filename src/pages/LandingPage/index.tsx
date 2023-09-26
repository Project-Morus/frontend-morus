import { useState } from "react";
import { Modal } from "../../components";


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
        onConfirmModal={() => {}}
        closeModal={() => setModalOpen(false)}
        iconName="ph-user"
        modalTitle="Funcionou  :)"
        buttonLabel="Aceitar"
      >
        <p>
          Tem certeza que deseja aceitar a reserva do morador Eduardo Simon da área comum da cobertura? Esta ação não
          poderá ser desfeita.
        </p>
      </Modal>
    </>
  );
};

export default LandingPage;
