import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

interface DeleteCashBookProps {
  id: number;
}

export async function deleteCashBook({ id }: DeleteCashBookProps) {
  await sleep();

  await httpClient.delete<DeleteCashBookProps>(`/api/DeletarLivroCaixa/${id}`);
}
