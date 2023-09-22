import Icon from "../../components/Icon";
import { ITableHeaderProps } from "../../components/Table/types";

const IconsSC = () => {
  return (
    <div style={{ display: "flex", gap: "0.8rem" }}>
      <Icon name="ph-pencil-simple-line" size="20" />
      <Icon name="ph-trash" color="#CE323B" size="20" />
    </div>
  );
};

export const HEADER_TABLE_CELLS: ITableHeaderProps[] = [
  { colName: "Apto" },
  { colName: "Torre" },
  { colName: "Nome" },
  { colName: "Ações" },
];

export const ROW_NAME_CELLS = [
  { apto: "1101", tower: "Sul", name: "Eduardo Simon", actions: <IconsSC /> },
  { apto: "1102", tower: "Norte", name: "Eduardo Simon", actions: <IconsSC /> },
  { apto: "1103", tower: "Sul", name: "Eduardo Simon", actions: <IconsSC /> },
  { apto: "1104", tower: "Sul", name: "Eduardo Simon", actions: <IconsSC /> },
  { apto: "1201", tower: "Norte", name: "Eduardo Simon", actions: <IconsSC /> },
];
