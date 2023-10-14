
import { ButtonContainerSC, HeaderSC, InputAndButtonsContainerSC } from "./styles";
import { TitleSC, MessageSC, QuantityTotalSC } from "../styles";
import { Button, Input, NewTable } from "../../components";
import { useGetOcurrences } from "./controller/useGetOccurences";
import { formatDate } from "../../helpers/date";

const Occurrences = () => {
  const { data, isError, hasData, count } = useGetOcurrences()

  return (
    <>
      <HeaderSC>
        <div>
          <TitleSC>Ocorrências</TitleSC>
          <MessageSC>Essa é a lista de todas as ocorrência cadastradas dos morados do condomínio Ilha de Capri. Busque ou adicione ocorrências!</MessageSC>
        </div>
        <QuantityTotalSC>Quantidade total de ocorrências: {count}</QuantityTotalSC>
      </HeaderSC>

      <InputAndButtonsContainerSC>
        <Input maxWidth={300} id={"search"} label={"Buscar"} />
        <ButtonContainerSC>
          <Button maxWidth={200} text={"Todos"} variant="secondary" />
        </ButtonContainerSC>
      </InputAndButtonsContainerSC>

      <NewTable.Container>
        <NewTable.Head>
          <NewTable.Row>
            <NewTable.CellHeader>Oi</NewTable.CellHeader>
            <NewTable.CellHeader>Oi</NewTable.CellHeader>
            <NewTable.CellHeader>Oi</NewTable.CellHeader>
          </NewTable.Row>
        </NewTable.Head>

        <NewTable.Body>
          <NewTable.Row>
            <NewTable.Cell>Oi</NewTable.Cell>
            <NewTable.Cell>Oi</NewTable.Cell>
            <NewTable.Cell>Oi</NewTable.Cell>
          </NewTable.Row>
        </NewTable.Body>
      </NewTable.Container>
  
    </>
  );
};

export default Occurrences;
