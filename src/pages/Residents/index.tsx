import Button from "../../components/Button";
import Input from "../../components/Input";
import Table from "../../components/Table";
import { ButtonContainerSC, HeaderSC, InputAndButtonsContainerSC } from "./styles";
import { HEADER_TABLE_CELLS, ROW_NAME_CELLS } from "./mockData";

const Residents = () => {
  return (
    <>
      <HeaderSC>
        <div>
          <h1>Moradores</h1>
          <p>Essa é a lista de todos os moradores do condomínio Ilha de Capri</p>
        </div>
        <p>Quantidade total de moradores: 124</p>
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
        emptyMessage="A tabela está vazia no momento. Espere o síndico adicionar novas informações!"
      />
    </>
  );
};

export default Residents;
