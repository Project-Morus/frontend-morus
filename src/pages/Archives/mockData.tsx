import Icon from "../../components/Icon";
import { ITableHeaderProps } from "../../components/Table/types";

const IconsSC = () => {
  return (
    <div style={{ display: "flex", gap: "0.8rem" }}>
      <Icon name="ph-file-arrow-down" size="20" onClick={() => console.log('download archive')} />
      <Icon name="ph-pencil-simple-line" size="20" onClick={() => console.log('edit archive')} />
      <Icon name="ph-trash" color="#CE323B" size="20" onClick={() => console.log('delete archive')} />
    </div>
  );
};

export const HEADER_TABLE_CELLS: ITableHeaderProps[] = [
  { colName: "Tamanho" },
  { colName: "Nome" },
  { colName: "Data da postagem" },
  { colName: "Ações" },
];

export const ROW_NAME_CELLS = [
  { size: "35MB", name: "Regimento Interno do Condomínio Ilha de Capri", created_at: "11/05/2023", actions: <IconsSC /> },
  { size: "15MB", name: "Convenção do condomínio Ilha de Capri", created_at: "12/04/2023", actions: <IconsSC /> },
  { size: "2MB", name: "Edital de Convocação para Assembleia Geral Ordinária", created_at: "10/04/2023", actions: <IconsSC /> },
  { size: "7MB", name: "Alvará de construção da prefeitura de Vila Velha-ES", created_at: "12/02/2022", actions: <IconsSC /> },
  { size: "101MB", name: "Plantas e Projetos", created_at: "19/01/2022", actions: <IconsSC /> },
];
