import { ITableHeaderProps } from "../../components/DataDisplay/Table/types";
import Icons from "./parts/Icons";


export const HEADER_TABLE_CELLS: ITableHeaderProps[] = [
  { colName: "Tamanho" },
  { colName: "Nome" },
  { colName: "Data da postagem" },
  { colName: "Ações" },
];

export const ROW_NAME_CELLS = [
  { size: "35MB", name: "Regimento Interno do Condomínio Ilha de Capri", created_at: "11/05/2023", actions: <Icons /> },
  { size: "15MB", name: "Convenção do condomínio Ilha de Capri", created_at: "12/04/2023", actions: <Icons /> },
  { size: "2MB", name: "Edital de Convocação para Assembleia Geral Ordinária", created_at: "10/04/2023", actions: <Icons /> },
  { size: "7MB", name: "Alvará de construção da prefeitura de Vila Velha-ES", created_at: "12/02/2022", actions: <Icons /> },
  { size: "101MB", name: "Plantas e Projetos", created_at: "19/01/2022", actions: <Icons /> },
];
