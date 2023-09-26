
import { ButtonContainerSC, HeaderSC, InputAndButtonsContainerSC } from "./styles";
import { TitleSC, MessageSC, QuantityTotalSC } from "../styles";
import { Button, Input } from "../../components";
import CustomTable from "./parts/CustomTable";

const Occurrences = () => {
  return (
    <>
      <HeaderSC>
        <div>
          <TitleSC>Ocorrências</TitleSC>
          <MessageSC>Essa é a lista de todas as ocorrência cadastradas dos morados do condomínio Ilha de Capri. Busque ou adicione ocorrências!</MessageSC>
        </div>
        <QuantityTotalSC>Quantidade total de ocorrências: 54</QuantityTotalSC>
      </HeaderSC>

      <InputAndButtonsContainerSC>
        <Input maxWidth={300} id={"search"} label={"Buscar"} />
        <ButtonContainerSC>
          <Button maxWidth={200} text={"Todos"} variant="secondary" />
        </ButtonContainerSC>
      </InputAndButtonsContainerSC>

      <CustomTable />
    </>
  );
};

export default Occurrences;
