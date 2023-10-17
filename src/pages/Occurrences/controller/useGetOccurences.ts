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

  const emptyData = !data || data.length === 0;
  const count = data?.length

  if (isError) {
    toast.error('Ops! Ocorreu um erro ao carregar os dados!', { id: 'ocurrence-list' })
  }

  return { data, isError, isLoading, emptyData, count }
}