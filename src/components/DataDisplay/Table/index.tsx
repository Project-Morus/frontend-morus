import { TBodySC, TableSC, TdSC, TrSC, WrapperMessageSC } from "./styles";
import { ITableProps } from "./types";

function Table<T extends Record<string, any>>({ headerCells, rowCells, emptyMessage, ...props }: ITableProps<T>) {
  return (
    (rowCells?.length) ? (
      <TableSC {...props}>
        <thead>
          <tr>
            {headerCells.map(({ colName }, index) => (
              <th key={index}>{colName}</th>
            ))}
          </tr>
        </thead>

        <TBodySC>
          {rowCells.map((item, rowIndex) => (
            <TrSC key={rowIndex}>
              {Object.keys(item).map((key, columnIndex) => (
                <TdSC key={columnIndex}>{item[key]}</TdSC>
              ))}
            </TrSC>
          ))}
        </TBodySC>
      </TableSC>
    ) : <WrapperMessageSC>{emptyMessage}</WrapperMessageSC>
  )
}


export default Table;
