import { ButtonContainerSC, HeaderSC, InputAndButtonsContainerSC } from "./styles";
import { HEADER_TABLE_CELLS, ROW_NAME_CELLS } from "./mockData";
import { TitleSC, MessageSC, QuantityTotalSC } from "../styles";
import { Button, Input, Table } from "../../components";

const CashBook = () => {
  return (
    <>
      <HeaderSC>
        <div>
          <TitleSC>Livro Caixa</TitleSC>
          <MessageSC>Essa é a lista de transferências financeiras cadastradas pelo condomínio Ilha de Capri</MessageSC>
        </div>
        <QuantityTotalSC>Quantidade total de transferências: 124</QuantityTotalSC>
      </HeaderSC>

      <InputAndButtonsContainerSC>
        <Input maxWidth={300} id={"search"} label={"Buscar"} />
        <ButtonContainerSC>
          <Button maxWidth={200} text={"Nova Transação"} />
        </ButtonContainerSC>
      </InputAndButtonsContainerSC>

      <Table
        headerCells={HEADER_TABLE_CELLS}
        rowCells={ROW_NAME_CELLS}
        emptyMessage="A tabela está vazia no momento. Espere o síndico adicionar novas informações!"
      />
    </>
  );
};

export default CashBook;
