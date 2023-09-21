import { ReactNode, TableHTMLAttributes } from "react"

export interface ITableProps<T extends Record<string, any>> extends TableHTMLAttributes<HTMLTableElement> {
  headerCells: ITableHeaderProps[]
  rowCells: T[]
  emptyMessage?: ReactNode | string
}

export interface ITableHeaderProps {
  colName: string,
}