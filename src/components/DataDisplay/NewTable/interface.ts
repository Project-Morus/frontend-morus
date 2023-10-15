import { DetailedHTMLProps, TableHTMLAttributes } from "react";

export type TableProps = DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> & {
  children: React.ReactNode;
  align?: "center" | "left" | "right" | undefined;
  empty?: boolean;
}

export type TableRef = ((instance: HTMLTableElement | null) => void) | React.RefObject<HTMLTableElement> | null | undefined