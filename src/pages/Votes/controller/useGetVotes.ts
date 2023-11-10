import { useQuery } from "@tanstack/react-query"
import toast from "react-hot-toast"

import { VotesResponse } from "../../../services/votesService/get";
import { votesService } from "../../../services/votesService";

export function useGetVotes() {
  const { data, isError, isLoading } = useQuery<VotesResponse[]>({
    queryKey: ['votes-list'],
    queryFn: async () => {
      return await votesService.getVotes()
    },
  })

  const emptyData = !data || data.length === 0;
  const count = data?.length

  if (isError) {
    toast.error('Ops! Ocorreu um erro ao carregar os dados!', { id: 'votes-list' })
  }

  return { data, isError, isLoading, emptyData, count }
}