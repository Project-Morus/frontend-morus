import { sleep } from "../../helpers/sleep";
import httpClient from "../httpClient";

export interface SignInParams {
  email: string,
  senha: string,
}

interface SignInPostProps {
  data: SiginInResponse,
}

type SiginInResponse = {
  token: string
}

export async function signIn(params: SignInParams) {
  await sleep()

  const { data } = await httpClient.post<SignInPostProps>('/api/login', params)

  return data.data;
}