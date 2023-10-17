import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

export type CashBookResponse = {
  id: number;
  descricaoTransacao: string;
  categoria: string;
  torre: string;
  numeroConta: string;
  valorTransacao: number;
  dataTransacao: string;
  idCondominio: number;
};

export async function getCashBook() {
  await sleep(1500);

  const response = await httpClient.get("/api/ListarLivroCaixa");

  return response.data.data;
}
