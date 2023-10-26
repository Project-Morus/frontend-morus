import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

interface DeleteInformationProps {
  id: number;
}

export async function deleteInformation({ id }: DeleteInformationProps) {
  await sleep();

  await httpClient.delete<DeleteInformationProps>(`/api/DeletarInformacao/${id}`);
}
