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
  { colName: "Torre" },
  { colName: "Descrição" },
  { colName: "Valor" },
  { colName: "Data" },
  { colName: "Categoria" },
  { colName: "Ações" },
];

export const ROW_NAME_CELLS = [
  {
    tower: "Todos",
    description: "Salário do porteiro",
    value: "-R$3.250,50",
    date: "05/02/2024",
    category: "Funcionário",
    actions: <IconsSC />,
  },
  {
    tower: "Norte",
    description: "Taxa de condomínio",
    value: "R$1.200,50",
    date: "05/02/2024",
    category: "Taxa de condomínio",
    actions: <IconsSC />,
  },
  {
    tower: "Sul",
    description: "Taxa de condomínio",
    value: "R$1.200,50",
    date: "05/02/2024",
    category: "Taxa de condomínio",
    actions: <IconsSC />,
  },
  {
    tower: "Sul",
    description: "Taxa de condomínio",
    value: "R$1.200,50",
    date: "05/02/2024",
    category: "Taxa de condomínio",
    actions: <IconsSC />,
  },
  {
    tower: "Norte",
    description: "Taxa de condomínio",
    value: "R$1.200,50",
    date: "05/02/2024",
    category: "Taxa de condomínio",
    actions: <IconsSC />,
  },
];
