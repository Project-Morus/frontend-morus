import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

export type MonthlyFeeResponse = {
  id: number,
  nome: string,
  descricao: string,
  valor: number,
  recorrente: boolean,
  dataFim: string,
}

export async function getMonthlyFee() {
  await sleep()

  const response = await httpClient.get("/api/ListarTaxaMensal");

  return response.data.data;
}
