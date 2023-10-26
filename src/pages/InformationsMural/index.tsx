import { ButtonContainerSC, HeaderSC, InputAndButtonsContainerSC } from "./styles";
import { TitleSC, MessageSC, QuantityTotalSC } from "../styles";
import { Button, Input } from "../../components";
import CustomTable from "./parts/CustomTable";
import { useModal } from "../../hooks";
import Form from "./parts/Form";
//import CustomTable from "./parts/CustomTable";

const InformationsMural = () => {
  const { isShowing, handleModalOpened, handleModalClose } = useModal();

  return (
    <>
      <HeaderSC>
        <div>
          <TitleSC>Mural de Informações</TitleSC>
          <MessageSC>
            Essa é a lista de todas as informações cadastradas do condomínio Ilha de Capri. Busque, visualize e cadastre
            novas informações para o mural!
          </MessageSC>
        </div>
        <QuantityTotalSC>Quantidade total de informativos: 32</QuantityTotalSC>
      </HeaderSC>

      {/* <NotificationEmailSC>
        <Button maxWidth={235} text={"Notificar todos por e-mail"} variant="primary" />
      </NotificationEmailSC> */}

      <InputAndButtonsContainerSC>
        <Input maxWidth={300} id={"search"} label={"Buscar"} />
        <ButtonContainerSC>
          <Button text={"Todos"} variant="secondary" />

          <Button text={"Nova Informação"} variant="primary" onClick={handleModalOpened} />
        </ButtonContainerSC>
      </InputAndButtonsContainerSC>

      <CustomTable />

      <Form opened={isShowing} handleModalClosed={handleModalClose} />
    </>
  );
};

export default InformationsMural;
