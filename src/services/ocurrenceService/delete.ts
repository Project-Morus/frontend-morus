import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

interface DeleteOcurrenceProps {
  id: number,
}

export async function deleteOcurrences({ id }: DeleteOcurrenceProps) {
  await sleep()

  await httpClient.delete<DeleteOcurrenceProps>(`/api/DeletarOcorrencia/${id}`)
}