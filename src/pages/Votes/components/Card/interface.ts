export interface ICardProps {
  id: number;
  title: string;
  description: string;
  expired_at: string;
  status: boolean;
  qtdVotosFavoraveis: number;
  qtdVotosContras: number;
  qtdVotosNulos: number;
}