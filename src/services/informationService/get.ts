import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

export type InformationResponse = {
  id: number;
  idUsuario: number;
  titulo: string;
  descricao: string;
  dataCadastro: string;
};

export async function getInformations() {
  await sleep(1500);

  const response = await httpClient.get("/api/ListarInformacao");

  return response.data.data;
}
