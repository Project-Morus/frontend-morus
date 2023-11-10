import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

interface DeleteVoteProps {
  id: number,
}

export async function deleteVote({ id }: DeleteVoteProps) {
  await sleep()

  await httpClient.delete<DeleteVoteProps>(`/api/DeletarVotacao/${id}`)
}