import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

export interface PutParams {
  id: number;
  descricaoTransacao: string;
  categoria: string;
  torre: string;
  valorTransacao: number;
  dataTransacao: string;
  tipoTransacao: number;
}

interface PutCashBookProps {
  data: PutCashBookResponse;
}

type PutCashBookResponse = {
  success: boolean;
  data: null;
  error: [];
};

export async function putCashBook(params: PutParams) {
  await sleep();

  const { data } = await httpClient.put<PutCashBookProps>("/api/EditarLivroCaixa", params);

  return data.data;
}
