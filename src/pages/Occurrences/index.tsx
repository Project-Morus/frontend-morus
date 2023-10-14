
import { ButtonContainerSC, HeaderSC, InputAndButtonsContainerSC } from "./styles";
import { TitleSC, MessageSC, QuantityTotalSC } from "../styles";
import { Button, Input, NewTable } from "../../components";
import { useGetOcurrences } from "./controller/useGetOccurences";
import { formatDate } from "../../helpers/date";
import { HEADER_TABLE_CELLS } from "./mockData";

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
            {HEADER_TABLE_CELLS.map(header => (
              <NewTable.CellHeader>{header.colName}</NewTable.CellHeader>
            ))}
          </NewTable.Row>
        </NewTable.Head>

        <NewTable.Body>
          {data?.map(item => (
            <NewTable.Row key={item.id}>
              <NewTable.Cell>{item.titulo}</NewTable.Cell>
              <NewTable.Cell>{item.descricao}</NewTable.Cell>
              <NewTable.Cell>{formatDate(item.dataCadastro)}</NewTable.Cell>
            </NewTable.Row>
          ))}
        </NewTable.Body>
      </NewTable.Container>

    </>
  );
};

export default Occurrences;
