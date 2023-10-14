import { useQuery } from "@tanstack/react-query"
import { ocurrenceService } from "../../../services/ocurrenceService"
import { OcurrenceResponse } from "../../../services/ocurrenceService/get"

export function useGetOcurrences() {
  const { data, isError, } = useQuery<OcurrenceResponse[]>({
    queryKey: ['ocurrence-list'],
    queryFn: async () => {
      return await ocurrenceService.getOcurrences()
    },
  })

  const hasData = data !== null && data !== undefined;
  const count = data?.length

  return { data, isError, hasData, count }
}