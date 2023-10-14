import { httpClient } from "../httpClient";


export type OcurrenceResponse = {
  id: number,
  id_usuario: number,
  titulo: string,
  descricao: string,
  dataCadastro: string,
}

export async function getOcurrences() {
  const response = await httpClient.get('/api/ListarOcorrencias')

  return response.data.data;
}