import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

export interface PostParams {
  id: number;
  descricaoTransacao: string;
  categoria: string;
  torre: string;
  numeroConta: string;
  valorTransacao: number;
  dataTransacao: string;
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
