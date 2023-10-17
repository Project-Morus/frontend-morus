/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { IconSC, TBodySC, TableSC, TdSC, TrExpanseSC, TrSC, WrapperMessageSC } from "./styles";
import { ITableProps } from "./types";

function Table<T extends Record<string, any>>({
  headerCells,
  rowCells,
  emptyMessage,
  expanse,
  expanseChildren,
  ...props
}: ITableProps<T>) {
  const [openRows, setOpenRows] = useState<boolean[]>([]);

  const toggleRow = (rowIndex: number) => {
    setOpenRows((prev) => {
      const newOpenRows = [...prev];
      newOpenRows[rowIndex] = !newOpenRows[rowIndex];
      return newOpenRows;
    });
  };

  return rowCells?.length ? (
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
          <>
            <TrSC $expanse={expanse} key={rowIndex}>
              {Object.keys(item).map((key, columnIndex) => (
                <TdSC $expanse={expanse} key={columnIndex}>
                  {item[key]}
                </TdSC>
              ))}
              {expanse && (
                <IconSC
                  name={openRows[rowIndex] ? "ph-caret-up" : "ph-caret-down"}
                  stroke="bold"
                  onClick={() => toggleRow(rowIndex)}
                />
              )}
            </TrSC>

            {openRows[rowIndex] && expanseChildren && (
              <TrExpanseSC>
                <TdSC $expanse={expanse} colSpan={headerCells.length}>
                  {item.description}
                </TdSC>
              </TrExpanseSC>
            )}
          </>
        ))}
      </TBodySC>
    </TableSC>
  ) : (
    <WrapperMessageSC>{emptyMessage}</WrapperMessageSC>
  );
}

export default Table;
