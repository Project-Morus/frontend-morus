import { ITableHeaderProps } from "../../types";
import { IconsSC } from "../../Icons";
import { ContentLoaderSC, CustomTableSC } from "./styles";
import { useGetCashBook } from "../../controller";
import { Icon, Loader, NewTable } from "../../../../components";
import { formatDate } from "../../../../helpers/date";
import { ModalDelete } from "../../../MonthlyFee/parts/ModalDelete";
import ModalPut from "../../../MonthlyFee/parts/ModalPut";
import { WrapperIcons } from "../../../MonthlyFee/parts/Table/styles";
import Status from "../../../Orders/Status";

const CustomTable = () => {
  const { data, isLoading, emptyData } = useGetCashBook();
  if (isLoading)
    return (
      <ContentLoaderSC>
        <Loader />
      </ContentLoaderSC>
    );

  const HEADER_TABLE_CELLS: ITableHeaderProps[] = [
    { colName: "Torre" },
    { colName: "Descrição" },
    { colName: "Valor" },
    { colName: "Data" },
    { colName: "Categoria" },
    { colName: "Ações" },
  ];

  return (
    <>
      <NewTable.Container>
        <NewTable.Head>
          <NewTable.Row>
            {HEADER_TABLE_CELLS.map((header, index) => (
              <NewTable.CellHeader key={index}>{header.colName}</NewTable.CellHeader>
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
                  <IconsSC data={item} />
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
