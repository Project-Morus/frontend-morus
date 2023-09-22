
import Button from "../../components/Button";
import Input from "../../components/Input";
import Table from "../../components/Table";
import { HEADER_TABLE_CELLS, ROW_NAME_CELLS } from "./mockData";
import { HeaderSC, InputAndButtonsContainerSC, ButtonContainerSC, QuantityTotalSC, MessageSC, TitleSC } from "./styles";

const Archives = () => {
  return (
    <>
      <HeaderSC>
        <div>
          <TitleSC>Arquivos</TitleSC>
          <MessageSC>Essa é a lista de todos os arquivos do condomínio Ilha de Capri</MessageSC>
        </div>
        <QuantityTotalSC>Quantidade total de arquivos: 124</QuantityTotalSC>
      </HeaderSC>

      <InputAndButtonsContainerSC>
        <Input maxWidth={300} id={"search"} label={"Buscar"} />
        <ButtonContainerSC>
          <Button maxWidth={200} text="Novo Documento" />
        </ButtonContainerSC>
      </InputAndButtonsContainerSC>

      <Table
        headerCells={HEADER_TABLE_CELLS}
        rowCells={ROW_NAME_CELLS}
        emptyMessage="A tabela está vazia no momento. Espere o síndico adicionar novas informações!"
      />
    </>
  );
}

export default Archives;