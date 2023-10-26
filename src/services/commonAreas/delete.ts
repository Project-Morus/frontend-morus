import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";
import { DeleteCommonAreaProps } from "./types";

export async function deleteCommonAreas({ id }: DeleteCommonAreaProps) {
  await sleep();

  await httpClient.delete<DeleteCommonAreaProps>(`/api/DeletarAreasComuns/${id}`);
}
