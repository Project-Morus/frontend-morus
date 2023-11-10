import { ITableHeaderProps } from "../../types";
import { CustomTableSC } from "./styles";
import { useGetInformations } from "../../controller";
import { IconsSC } from "../Icons";
import { Loader } from "../../../../components";
import { ContentLoaderSC } from "../../../styles";

const CustomTable = () => {
  const { data, isLoading } = useGetInformations();

  if (isLoading)
    return (
      <ContentLoaderSC>
        <Loader />
      </ContentLoaderSC>
    );

  const HEADER_TABLE_CELLS: ITableHeaderProps[] = [
    { colName: "Título" },
    { colName: "Descrição" },
    { colName: "Ações" },
  ];

  const rowData = data?.map((info) => {
    const [title, description] = Object.values(info).slice(1, 3);
    return { title, description, actions: <IconsSC data={info} /> };
  });

  console.log(rowData);

  return (
    <CustomTableSC
      expanse
      expanseChildren
      headerCells={HEADER_TABLE_CELLS}
      rowCells={rowData}
      emptyMessage="A tabela está vazia no momento. Espere o síndico adicionar novas informações!"
    />
  );
};

export default CustomTable;
