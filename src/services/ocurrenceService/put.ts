import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

export interface PutParams {
  id: number,
  titulo: string,
  descricao: string,
  dataCadastro: string,
  idUsuario: number,
  resolvido: boolean,
}
interface PutOcurrenceProps {
  data: PutOcurrenceResponse
}

type PutOcurrenceResponse = {
  success: boolean,
  data: null,
  error: [],
}

export async function putOcurrences(params: PutParams) {
  await sleep()

  const { data } = await httpClient.put<PutOcurrenceProps>('/api/AtualizarOcorrencia', params)

  return data.data;
}