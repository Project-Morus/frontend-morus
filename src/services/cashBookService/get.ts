import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

export async function getCashBook() {
  await sleep();

  const response = await httpClient.get("/api/ListarLivroCaixa");

  return response.data.data;
}
