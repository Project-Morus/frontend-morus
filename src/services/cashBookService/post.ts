import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

export interface PostParams {
  descricaoTransacao: string;
  categoria: string;
  torre: string;
  valorTransacao: number;
  tipoTransacao: number;
  dataTransacao: string,
}

interface PostCashBookProps {
  data: PostCashBookResponse;
}

type PostCashBookResponse = {
  success: boolean;
  data: null;
  error: [];
};

export async function postCashBook(params: PostParams) {
  await sleep();

  const { data } = await httpClient.post<PostCashBookProps>("/api/CadastrarLivroCaixa", params);

  return data.data;
}
