import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

export interface PutParams {
  id: number,
  nome: string,
  descricao: string,
  valor: number,
  recorrente: boolean,
  dataInicio: string,
  dataFim: string,
}

interface PutMonthlyFeeProps {
  data: PutMonthlyFeeResponse
}

type PutMonthlyFeeResponse = {
  success: boolean,
  data: null,
  error: [],
}

export async function putMonthlyFee(params: PutParams) {
  await sleep()

  const { data } = await httpClient.put<PutMonthlyFeeProps>('/api/AtualizarTaxaMensal', params)

  return data.data;
}