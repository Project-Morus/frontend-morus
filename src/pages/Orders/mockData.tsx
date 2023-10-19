import { Icon } from "../../components";
import { ITableHeaderProps } from "../../components/DataDisplay/Table/types";
import Status from "./Status";

export const HEADER_TABLE_CELLS: ITableHeaderProps[] = [
  { colName: "Código" },
  { colName: "Assinado por:" },
  { colName: "Data de chegada" },
  { colName: "Data da retirada" },
  { colName: "Status" },
  { colName: "Ações" },

];

export const ROW_NAME_CELLS = [
  { code: "NL779300547BR", name: "Eduardo Simon", arrival_at: "11/05/2023", withdrawal_at: "-", status: <Status />, actions: <Icon name="ph-pencil-simple-line" /> },
  { code: "NX109953934BR", name: "Elisa Mesquita", arrival_at: "12/04/2023", withdrawal_at: "11/05/2023", status: <Status collected />, actions: <Icon name="ph-pencil-simple-line" /> },
  { code: "NA138656037BR", name: "Aline Brandão", arrival_at: "10/04/2023", withdrawal_at: "11/05/2023", status: <Status collected />, actions: <Icon name="ph-pencil-simple-line" /> },
  { code: "LB571465071HK", name: "Gustavo Wagner", arrival_at: "12/02/2022", withdrawal_at: "-", status: <Status />, actions: <Icon name="ph-pencil-simple-line" /> },
  { code: "LB571465071HK", name: "Gustavo Wagner", arrival_at: "12/02/2022", withdrawal_at: "-", status: <Status />, actions: <Icon name="ph-pencil-simple-line" /> },
  { code: "LB554875142HK", name: "Gabriel Palhares", arrival_at: "19/01/2022", withdrawal_at: "11/05/2023", status: <Status collected />, actions: <Icon name="ph-pencil-simple-line" /> },
];
