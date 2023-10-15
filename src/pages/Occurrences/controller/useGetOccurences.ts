import { useQuery } from "@tanstack/react-query"
import { ocurrenceService } from "../../../services/ocurrenceService"
import { OcurrenceResponse } from "../../../services/ocurrenceService/get"
import toast from "react-hot-toast"

export function useGetOcurrences() {
  const { data, isError, isLoading } = useQuery<OcurrenceResponse[]>({
    queryKey: ['ocurrence-list'],
    queryFn: async () => {
      return await ocurrenceService.getOcurrences()
    },
  })

  if (isError) toast.error('Ops! Ocorreu um erro ao carregar os dados!')

  const emptyData = !data || data.length === 0;
  const count = data?.length

  return { data, isError, isLoading, emptyData, count }
}