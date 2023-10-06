
import { ButtonContainerSC, HeaderSC, InputAndButtonsContainerSC } from "./styles";
import { HEADER_TABLE_CELLS, ROW_NAME_CELLS } from "./mockData";
import { TitleSC, MessageSC, QuantityTotalSC } from "../styles";
import { Button, Input, Table } from "../../components";

const Residents = () => {
  return (
    <>
      <HeaderSC>
        <div>
          <TitleSC>Moradores</TitleSC>
          <MessageSC>Essa é a lista de todos os moradores do condomínio Ilha de Capri</MessageSC>
        </div>
        <QuantityTotalSC>Quantidade total de moradores: 124</QuantityTotalSC>
      </HeaderSC>

      <InputAndButtonsContainerSC>
        <Input maxWidth={300} id={"search"} label={"Buscar"} />
        <ButtonContainerSC>
          <Button maxWidth={200} text={"Novo morador"} />
        </ButtonContainerSC>
      </InputAndButtonsContainerSC>

      <Table
        headerCells={HEADER_TABLE_CELLS}
        rowCells={ROW_NAME_CELLS}
        emptyMessage="A tabela está vazia no momento. Espere o síndico adicionar novos moradores!"
        expanse
        expanseChildren={<h1>oi</h1>}
      />
    </>
  );
};

export default Residents;
