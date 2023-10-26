export type CommonAreasResponse = {
  id: number;
  nome: string;
  limite: number;
  id_condominio: string;
};

export type PostParams = {
  nome: string;
  limite: number;
};

export type PutParams = {
  id: number;
  nome: string;
  limite: number;
  id_condominio: string;
};

export interface DeleteCommonAreaProps {
  id: number;
}

export interface PostCommonAreaProps {
  data: PostCommonAreaResponse;
}

export type PostCommonAreaResponse = {
  success: boolean;
  data: null;
  error: [];
};

export interface PutCommonAreaProps {
  data: PutCommonAreaResponse;
}

export type PutCommonAreaResponse = {
  success: boolean;
  data: null;
  error: [];
};
