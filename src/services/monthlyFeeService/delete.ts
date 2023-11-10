import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

interface DeleteMonthlyFeeProps {
  id: number,
}

export async function deleteMonthlyFee({ id }: DeleteMonthlyFeeProps) {
  await sleep()

  await httpClient.delete<DeleteMonthlyFeeProps>(`/api/ExcluirTaxaMensal/${id}`)
}