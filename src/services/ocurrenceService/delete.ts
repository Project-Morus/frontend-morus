import { httpClient } from "../httpClient";

interface DeleteOcurrenceProps {
  id: number,
}

export async function deleteOcurrences({ id }: DeleteOcurrenceProps) {
  await httpClient.delete<DeleteOcurrenceProps>(`/api/DeletarOcorrencia/${id}`)
}