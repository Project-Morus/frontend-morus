import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

export interface PostParams {
  nome: string,
  descricao: string,
  valor: number,
  recorrent: boolean,
  dataInicio: string,
  dataFim: string,
}

interface PostMonthlyFeeProps {
  data: PostMonthlyFeeResponse
}

type PostMonthlyFeeResponse = {
  success: boolean,
  data: null,
  error: [],
}

export async function postMonthlyFee(params: PostParams) {
  await sleep()

  const { data } = await httpClient.post<PostMonthlyFeeProps>('/api/CadastrarTaxaMensal', params)

  return data.data;
}