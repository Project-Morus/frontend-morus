import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

export interface PutParams {
  id: number;
  tema: string;
  descricao: string;
  dataExpiracao: string;
  ativa: boolean;
}

interface PutVoteProps {
  data: PutVoteResponse;
}

type PutVoteResponse = {
  success: boolean;
  data: null;
  error: [];
};

export async function putVotes(params: PutParams) {
  await sleep();

  const response = await httpClient.put<PutVoteProps>("/api/EditarVotacao", params);

  return response.data.data;
}
