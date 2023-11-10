import { IconsSC } from "../../Icons";
import { ContentLoaderSC } from "./styles";
import { useGetCashBook } from "../../controller";
import { Loader, NewTable } from "../../../../components";
import { formatDate } from "../../../../helpers/date";
import { WrapperIcons } from "../../../MonthlyFee/parts/Table/styles";
import { HEADER_TABLE_CELLS } from "./mockData";

const CustomTable = () => {
  const { data, isLoading } = useGetCashBook();

  if (isLoading)
    return (
      <ContentLoaderSC>
        <Loader />
      </ContentLoaderSC>
    );

  return (
    <>
      <NewTable.Container>
        <NewTable.Head>
          <NewTable.Row>
            {HEADER_TABLE_CELLS.map((header, index) => (
              <NewTable.CellHeader key={index}>
                {header.colName}
              </NewTable.CellHeader>
            ))}
          </NewTable.Row>
        </NewTable.Head>

        {data?.map((item) => (
          <NewTable.Body>
            <NewTable.Row>
              <NewTable.Cell>{item.torre}</NewTable.Cell>
              <NewTable.Cell>{item.descricaoTransacao}</NewTable.Cell>
              <NewTable.Cell>R${item.valorTransacao}</NewTable.Cell>
              <NewTable.Cell>{formatDate(item.dataTransacao)}</NewTable.Cell>
              <NewTable.Cell>{item.categoria}</NewTable.Cell>
              <NewTable.Cell>
                <WrapperIcons>
                  <IconsSC
                    categoria={item.categoria}
                    dataTransacao={item.dataTransacao}
                    descricaoTransacao={item.descricaoTransacao}
                    id={item.id}
                    tipoTransacao={item.tipoTransacao}
                    torre={item.torre}
                    valorTransacao={item.valorTransacao}
                  />
                </WrapperIcons>
              </NewTable.Cell>
            </NewTable.Row>
          </NewTable.Body>
        ))}
      </NewTable.Container>
    </>
  );
};

export default CustomTable;
