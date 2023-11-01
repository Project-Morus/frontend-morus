import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";

export interface PostParams {
  titulo: string;
  descricao: string;
  ativo: boolean;
}

interface PostInformationProps {
  data: PostInformationResponse;
}

type PostInformationResponse = {
  success: boolean;
  data: null;
  error: [];
};

export async function postInformation(params: PostParams) {
  await sleep();

  const { data } = await httpClient.post<PostInformationProps>("/api/CadastrarInformacao", params);

  return data.data;
}
