import { ButtonContainerSC, HeaderSC, InputAndButtonsContainerSC } from "./styles";
import { TitleSC, MessageSC, QuantityTotalSC } from "../styles";
import { Button, Input, Modal } from "../../components";
import CustomTable from "./parts/CustomTable";
import PostForm from "./parts/PostForm";
import { InputContainerSC } from "./Icons/styles";
import { useState } from "react";

const CashBook = () => {
  const [openedRegisterModal, setOpenedRegisterModal] = useState<boolean>(false);

  const handleOpenRegisterModal = () => {
    setOpenedRegisterModal(true);
  };

  const handleCloseRegisterModal = () => {
    setOpenedRegisterModal(false);
  };

  return (
    <>
      <HeaderSC>
        <div>
          <TitleSC>Livro Caixa</TitleSC>
          <MessageSC>Essa é a lista de transferências financeiras cadastradas pelo condomínio Ilha de Capri</MessageSC>
        </div>
        {/* <QuantityTotalSC>Quantidade total de transferências: 124</QuantityTotalSC> */}
      </HeaderSC>

      <InputAndButtonsContainerSC>
        <Input maxWidth={300} id={"search"} label={"Buscar"} />
        <ButtonContainerSC>
          <Button maxWidth={200} text={"Nova Transação"} onClick={handleOpenRegisterModal} />
        </ButtonContainerSC>
      </InputAndButtonsContainerSC>

      <CustomTable />

      <Modal
        open={openedRegisterModal}
        closeModal={handleCloseRegisterModal}
        variant="form"
        iconName="ph-book-bookmark"
        modalTitle="Nova Transação"
        buttonLabel="Cadastrar"
        onConfirmModal={handleCloseRegisterModal}
        onCancelModal={handleCloseRegisterModal}
      >
        <InputContainerSC>
          <PostForm />
        </InputContainerSC>
      </Modal>
    </>
  );
};

export default CashBook;
