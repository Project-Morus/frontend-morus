
import { ButtonContainerSC, HeaderSC, InputAndButtonsContainerSC, NotificationEmailSC } from "./styles";
import { TitleSC, MessageSC, QuantityTotalSC } from "../styles";
import { Button, Input, } from "../../components";
import CustomTable from "./parts/CustomTable";

const Fines = () => {
  return (
    <>
      <HeaderSC>
        <div>
          <TitleSC>Multas</TitleSC>
          <MessageSC>Essa é a lista de todas as multas cadastradas dos morados do condomínio Ilha de Capri. Busque ou adicione por multas e notifique os moradores de suas multas!</MessageSC>
        </div>
        <QuantityTotalSC>Quantidade total de multas: 32</QuantityTotalSC>
      </HeaderSC>
      
      <NotificationEmailSC>
        <Button maxWidth={235} text={"Notificar todos por e-mail"} variant="primary" />
      </NotificationEmailSC>

      <InputAndButtonsContainerSC>
        <Input maxWidth={300} id={"search"} label={"Buscar"} />
        <ButtonContainerSC>
            <Button text={"Todos"} variant="secondary" />
            <Button text={"Nova Multa"} variant="primary" />
        </ButtonContainerSC>
      </InputAndButtonsContainerSC>

      <CustomTable />
    </>
  );
};

export default Fines;
