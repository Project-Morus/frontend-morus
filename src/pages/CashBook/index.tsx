import Button from "../../components/Button";
import Input from "../../components/Input";
import Table from "../../components/Table";
import { ButtonContainerSC, HeaderSC, InputAndButtonsContainerSC } from "./styles";
import { HEADER_TABLE_CELLS, ROW_NAME_CELLS } from "./mockData";

const CashBook = () => {
  return (
    <>
      <HeaderSC>
        <div>
          <h1>Livro Caixa</h1>
          <p>Essa é a lista de transferências financeiras cadastradas pelo condomínio Ilha de Capri</p>
        </div>
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
