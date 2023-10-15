import { forwardRef } from 'react';
import { TableProps, TableRef } from './interface';
import {
  CustomTable,
  CustomTableBody,
  CustomTableCell,
  CustomTableCellHeader,
  CustomTableHeader,
  CustomTableRow,
  EmptyMessageSC,
} from './styles';

const Container = forwardRef(function Container(
  { children, empty, ...props }: TableProps,
  ref: TableRef
) {
  return empty ? (
    <CustomTable>
      <EmptyMessageSC>A tabela está vazia no momento. Espere o síndico adicionar novos dados!</EmptyMessageSC>
    </CustomTable>
  ) : (
    <CustomTable {...props} ref={ref}>
      {children}
    </CustomTable>
  );
});

export const NewTable = {
  Container,
  Body: CustomTableBody,
  Head: CustomTableHeader,
  Row: CustomTableRow,
  Cell: CustomTableCell,
  CellHeader: CustomTableCellHeader,
};
