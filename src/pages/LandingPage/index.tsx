import { useState } from "react";
import Toggle from "../../components/Toggle";
import { Modal } from "../../components";
import Dropdown from "../../components/Dropdown";
import Archive from "../../components/DataDisplay/Archive";

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
      <Dropdown label="teste" options={["teste", "testi"]} />
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
      <Toggle toggled={true} onClick={handleClick} />
    </>
  );
};

export default LandingPage;
