import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { cashBookService } from "../../../services/cashBookService";
import { CashBookResponse } from "../../../services/cashBookService/types";

export function useGetCashBook() {
  const { data, isError, isLoading } = useQuery<CashBookResponse[]>({
    queryKey: ["cash-book-list"],
    queryFn: async () => {
      return await cashBookService.getCashBook();
    },
  });

  const emptyData = !data || data.length === 0;
  const count = data?.length;

  if (isError) {
    toast.error("Ops! Ocorreu um erro ao carregar os dados!", { id: "cash-book" });
  }

  return { data, isError, isLoading, emptyData, count };
}
