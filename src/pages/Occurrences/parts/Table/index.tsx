import { NewTable } from "../../../../components";
import { formatDate } from "../../../../helpers/date";
import { useGetOcurrences } from "../../controller/useGetOccurences";
import { HEADER_TABLE_CELLS } from "../../mockData";

function TableOcurrence() {
  const { data, isError, emptyData } = useGetOcurrences()

  return (
    <NewTable.Container empty={isError || emptyData}>
      <NewTable.Head>
        <NewTable.Row>
          {HEADER_TABLE_CELLS.map((header, index) => (
            <NewTable.CellHeader key={index}>{header.colName}</NewTable.CellHeader>
          ))}
        </NewTable.Row>
      </NewTable.Head>

      <NewTable.Body>
        {data?.map(item => (
          <NewTable.Row key={item.id}>
            <NewTable.Cell>{item.titulo}</NewTable.Cell>
            <NewTable.Cell>{item.descricao}</NewTable.Cell>
            <NewTable.Cell>{formatDate(item.dataCadastro)}</NewTable.Cell>
          </NewTable.Row>
        ))}
      </NewTable.Body>
    </NewTable.Container>
  );
}

export default TableOcurrence;