import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";


export type OcurrenceResponse = {
  id: number,
  idUsuario: number,
  titulo: string,
  descricao: string,
  dataCadastro: string,
  resolvido: boolean,
}

export async function getOcurrences() {
  await sleep()

  const response = await httpClient.get('/api/ListarOcorrencias')

  return response.data.data;
}