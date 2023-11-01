import { ButtonContainerSC, HeaderSC, InputAndButtonsContainerSC } from "./styles";
import { TitleSC, MessageSC } from "../styles";
import { Button, Modal } from "../../components";
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
        <ButtonContainerSC>
          <Button maxWidth={200} text={"Nova Transação"} onClick={handleOpenRegisterModal} />
        </ButtonContainerSC>
      </InputAndButtonsContainerSC>

      <CustomTable />

      <PostForm opened={openedRegisterModal} handleModalClosed={handleCloseRegisterModal} />
    </>
  );
};

export default CashBook;
