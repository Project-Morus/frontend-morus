import { ITableHeaderProps } from "../../components/DataDisplay/Table/types";

export const HEADER_TABLE_CELLS: ITableHeaderProps[] = [
  { colName: "Motivo" },
  { colName: "Data da Ocorrência" },
  { colName: "Status" },
];

export const ROW_NAME_CELLS = [
  { reason: "Carro bateu na pilastra da garagem", date: "01/11/2023", status: 'Resolvido' },
  { reason: "Elevador quebrou devido à sobrecarga elétrica", date: "01/11/2023", status: 'Resolvido' },
  { reason: "Bicicleta desapareceu do bicicletário", date: "01/11/2023", status: 'Pendente' },
  { reason: "Vidro da portaria quebrou com o vento", date: "01/11/2023", status: 'Resolvido' },
  { reason: "Esteira da academia parou de funcionar", date: "01/11/2023", status: 'Pendente' },
  { reason: "Portão da garagem enguiçou", date: "01/11/2023", status: 'Pendente' },

];
