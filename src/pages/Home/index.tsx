import { useEffect, useState } from "react";
import CardInformations from "./parts/CardInformations";

import { CardInformationProps } from "./parts/types";
import httpClient from "../../services/httpClient";
import { ContainerSC } from "./styles";
import toast from "react-hot-toast";


const Home = () => {
  const [data, setData] = useState<CardInformationProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await httpClient.get("api/ListarInformacao");
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        toast.error("Erro ao buscar dados!");
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const renderList = () =>
    data.map((item: CardInformationProps) => {
      return <CardInformations titulo={item.titulo} descricao={item.descricao} />;
    });

  return <ContainerSC>{renderList()}</ContainerSC>;
};

export default Home;
