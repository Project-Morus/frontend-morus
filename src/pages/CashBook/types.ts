export interface CashBookProps {
  id: number;
  descricaoTransacao: string;
  categoria: string;
  torre: string;
  numeroConta: number;
  valorTransacao: number;
  dataTransacao: string;
  idCondominio: number;
  tipoTransacao: number;
}

export interface ITableHeaderProps {
  colName: string;
}
