import { useQuery } from "@tanstack/react-query";
import { informationService } from "../../../services/informationService";
import { InformationResponse } from "../../../services/informationService/get";
import toast from "react-hot-toast";

export function useGetInformations() {
  const { data, isError, isLoading } = useQuery<InformationResponse[]>({
    queryKey: ["information-list"],
    queryFn: async () => {
      return await informationService.getInformations();
    },
  });

  const emptyData = !data || data.length === 0;
  const count = data?.length;

  if (isError) {
    toast.error("Ops! Ocorreu um erro ao carregar os dados!", { id: "information-list" });
  }

  return { data, isError, isLoading, emptyData, count };
}
