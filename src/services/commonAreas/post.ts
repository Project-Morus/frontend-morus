import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";
import { PostCommonAreaProps } from "./types";
import { PostParams } from "./types";

export async function postCommonAreas(params: PostParams) {
  await sleep();

  const { data } = await httpClient.post<PostCommonAreaProps>("/api/CadastrarAreaComum", params);

  return data.data;
}
