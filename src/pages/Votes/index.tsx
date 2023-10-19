import { ButtonContainerSC, HeaderSC, InputAndButtonsContainerSC } from "./styles";
import { TitleSC, MessageSC, QuantityTotalSC } from "../styles";
import { Button, Input } from "../../components";
import Card from "./components/Card";

const Orders = () => {

  return (
    <>
      <HeaderSC>
        <div>
          <TitleSC>Votações</TitleSC>
          <MessageSC>Essa é a lista de todas as votações em abertos dos moradores do condomínio Ilha de Capri. Busque e faça o seu voto!</MessageSC>
        </div>
        <QuantityTotalSC>
          Quantidade total de votações: 54
        </QuantityTotalSC>
      </HeaderSC>

      <InputAndButtonsContainerSC>
        <Input
          maxWidth={300}
          id={"search"}
          label={"Buscar"}
        />
        <ButtonContainerSC>
          <Button
            maxWidth={200}
            text={"Todos"}
            variant="secondary"
          />
          <Button
            maxWidth={200}
            text={"Registrar Votação"}
            variant="primary"
          />
        </ButtonContainerSC>
      </InputAndButtonsContainerSC>

      <Card />
    </>
  );
};

export default Orders;
