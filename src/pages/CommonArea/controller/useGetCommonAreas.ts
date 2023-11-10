import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { CommonAreasResponse } from "../../../services/commonAreas/types";
import { commonAreasService } from "../../../services/commonAreas";

export function useGetCommonAreas() {
  const { data, isError, isLoading } = useQuery<CommonAreasResponse[]>({
    queryKey: ["common-area-list"],
    queryFn: async () => {
      return await commonAreasService.getCommonAreas();
    },
  });

  const emptyData = !data || data.length === 0;
  const count = data?.length;

  if (isError) {
    toast.error("Ops! Ocorreu um erro ao carregar os dados!", { id: "common-area" });
  }

  return { data, isError, isLoading, emptyData, count };
}
