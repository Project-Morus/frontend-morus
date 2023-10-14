import { forwardRef } from 'react';
import { TableProps, TableRef } from './interface';
import {
  CustomTable,
  CustomTableBody,
  CustomTableCell,
  CustomTableCellHeader,
  CustomTableHeader,
  CustomTableRow,
} from './styles';

const Container = forwardRef(function Container(
  { children, ...props }: TableProps,
  ref: TableRef
) {
  return (
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
