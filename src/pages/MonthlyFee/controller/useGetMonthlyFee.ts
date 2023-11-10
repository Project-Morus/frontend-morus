import { useQuery } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { MonthlyFeeResponse } from "../../../services/monthlyFeeService/get";
import { monthlyFeeService } from "../../../services/monthlyFeeService";

export function useGetMonthlyFee() {
  const { data, isError, isLoading } = useQuery<MonthlyFeeResponse[]>({
    queryKey: ['monthlyFee-list'],
    queryFn: async () => {
      return await monthlyFeeService.getMonthlyFee()
    },
  })

  const emptyData = !data || data.length === 0;
  const count = data?.length

  if (isError) {
    toast.error('Ops! Ocorreu um erro ao carregar os dados!', { id: 'ocurrence-list' })
  }

  return { data, isError, isLoading, emptyData, count }
}