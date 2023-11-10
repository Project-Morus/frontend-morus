import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

export async function getCommonAreas() {
  await sleep(1500);

  const response = await httpClient.get("/api/ListarAreasComuns");

  return response.data.data;
}
