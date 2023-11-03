import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

export type VotesResponse = {
  id: number,
  tema: string,
  descricao: string,
  dataCriacao: string,
  dataExpiracao: string,
  ativa: boolean,
  idCondominio: number,
}

export async function getVotes() {
  await sleep()

  const response = await httpClient.get("/api/ListarVotacao");

  return response.data.data;
}
