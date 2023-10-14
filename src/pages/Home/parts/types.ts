import { JSX } from "react";

export interface CardInformationProps {
  id: number;
  titulo: string;
  descricao: string;
  id_condominio: number;
  userId: number | null;
  ativo: boolean;
  dataCadastro: Date;
  dataAlteracao: Date;
}

export interface CardInformationsProps {
  data: {
    titulo: string;
    descricao: string;
    actions: (data: CardInformationProps) => JSX.Element;
  };
}
