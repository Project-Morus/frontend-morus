import { sleep } from "../../helpers/sleep";
import { httpClient } from "../httpClient";


interface PutOcurrenceProps {
  data: PutOcurrenceResponse
}

type PutOcurrenceResponse = {
  success: boolean,
  data: null,
  error: [],
}

export async function putOcurrences() {
  await sleep()
}