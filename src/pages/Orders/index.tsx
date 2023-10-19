import { ButtonContainerSC, HeaderSC, InputAndButtonsContainerSC } from "./styles";
import { TitleSC, MessageSC, QuantityTotalSC } from "../styles";
import { Button, Input, Table } from "../../components";
import { HEADER_TABLE_CELLS, ROW_NAME_CELLS } from "./mockData";

const Orders = () => {

  return (
    <>
      <HeaderSC>
        <div>
          <TitleSC>Encomendas</TitleSC>
          <MessageSC>Essa é a lista de todas as encomendas recolhidas pelo porteiro/síndico no aguardo de serem pegas pelo morador do condomínio Ilha de Capri. Verifique a sua encomenda!</MessageSC>
        </div>
        <QuantityTotalSC>
          Quantidade total de encomendas: 15
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
            text={"Nova Encomenda"}
            variant="primary"
          />
        </ButtonContainerSC>
      </InputAndButtonsContainerSC>

      <Table
        headerCells={HEADER_TABLE_CELLS}
        rowCells={ROW_NAME_CELLS}
        emptyMessage="A tabela está vazia no momento. Espere o porteiro adicionar novas encomendas!"
      />
    </>
  );
};

export default Orders;
