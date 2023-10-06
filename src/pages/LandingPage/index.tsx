import { useState } from "react";
import Toggle from "../../components/Toggle";
import { Archive, Modal } from "../../components";

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
        iconName="ph-money"
        modalTitle="Cadastro Multa  :)"
        buttonLabel="Aceitar"
      >
        <Archive />
      </Modal>
      {enabled ? <h1>enabled</h1> : <h1>disabled</h1>}
      <Toggle toggled={true} onClick={handleClick} />
    </>
  );
};

export default LandingPage;
