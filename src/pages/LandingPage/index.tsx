import { useState } from "react";
import { Modal } from "../../components";
import Toggle from "../../components/Toggle";

const LandingPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const [enabled, setEnabled] = useState(false);

  const handleClick = () => {
    setEnabled(!enabled);
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
      <Toggle isChecked={enabled} onClick={handleClick} />
    </>
  );
};

export default LandingPage;
