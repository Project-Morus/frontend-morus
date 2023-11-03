import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

export interface PostParams {
  tema: string,
  descricao: string,
  dataExpiracao: string,
}

interface PostVoteProps {
  data: PostVoteResponse
}

type PostVoteResponse = {
  success: boolean,
  data: null,
  error: [],
}

export async function postVotes(params: PostParams) {
  await sleep()

  const response = await httpClient.post<PostVoteProps>("/api/CadastrarVotacao", params);

  return response.data.data;
}
