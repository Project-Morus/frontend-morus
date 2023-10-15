import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

export interface PostParams {
  titulo: string,
  descricao: string,
  dataCadastro: string,
  id_usuario: number,
}

interface PostOcurrenceProps {
  data: PostOcurrenceResponse
}

type PostOcurrenceResponse = {
  success: boolean,
  data: null,
  error: [],
}

export async function postOcurrences(params: PostParams) {
  await sleep()

  const { data } = await httpClient.post<PostOcurrenceProps>('/api/CadastrarOcorrencia', params)

  return data.data;
}