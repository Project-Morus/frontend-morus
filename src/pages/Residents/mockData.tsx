import { ITableHeaderProps } from "../../components/DataDisplay/Table/types";
import Icons from "./parts/Icons";

export const HEADER_TABLE_CELLS: ITableHeaderProps[] = [
  { colName: "Apto" },
  { colName: "Torre" },
  { colName: "Nome" },
  { colName: "Ações" },
];

export const ROW_NAME_CELLS = [
  { apto: "1101", tower: "Sul", name: "Eduardo Simon", actions: <Icons /> },
  { apto: "1102", tower: "Norte", name: "Eduardo Simon", actions: <Icons /> },
  { apto: "1103", tower: "Sul", name: "Eduardo Simon", actions: <Icons /> },
  { apto: "1104", tower: "Sul", name: "Eduardo Simon", actions: <Icons /> },
  { apto: "1201", tower: "Norte", name: "Eduardo Simon", actions: <Icons /> },
];
