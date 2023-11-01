import { ITableHeaderProps } from "../../types";
import { IconsSC } from "../../Icons";
import { ContentLoaderSC, CustomTableSC } from "./styles";
import { useGetCashBook } from "../../controller";
import { Loader } from "../../../../components";
import { formatDate } from "../../../../helpers/date";

const CustomTable = () => {
  const { data, isLoading, emptyData } = useGetCashBook();
  if (isLoading)
    return (
      <ContentLoaderSC>
        <Loader />
      </ContentLoaderSC>
    );

  const rowData = data?.map((info) => {
    const [description, category, tower, value, transactionDate] = Object.values(info).slice(1, 6);
    const formatedTransactionDate = formatDate(transactionDate);
    return { tower, description, value, formatedTransactionDate, category, actions: <IconsSC data={info} /> };
  });

  const HEADER_TABLE_CELLS: ITableHeaderProps[] = [
    { colName: "Torre" },
    { colName: "Descrição" },
    { colName: "Valor" },
    { colName: "Data" },
    { colName: "Categoria" },
    { colName: "Ações" },
  ];

  return (
    <CustomTableSC
      headerCells={HEADER_TABLE_CELLS}
      rowCells={rowData}
      emptyMessage="A tabela está vazia no momento. Espere o síndico adicionar novas informações!"
    />
  );
};

export default CustomTable;
