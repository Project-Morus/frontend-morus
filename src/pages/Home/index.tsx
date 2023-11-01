import { useEffect, useState } from "react";
import { httpClient } from "../../services/httpClient";

import CardInformations from "./parts/CardInformations";
import { CardInformationProps } from "./parts/types";
import { VictoryArea } from "victory";

const Home = () => {
  const [data, setData] = useState<CardInformationProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("entrou no try");
        const response = await httpClient.get("api/ListarInformacao");
        setData(response.data.data);
        setIsLoading(false);
        console.log(response.data.data);
      } catch (error) {
        console.log("entrou no catch");
        console.error("Erro ao buscar dados da API:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const renderList = () =>
    data.map((item: CardInformationProps) => {
      return <CardInformations titulo={item.titulo} descricao={item.descricao} />;
    });

  return (
    <>
      {renderList()}
      <VictoryArea data={[{ x: 2, y: 35 }]} />
    </>
  );
};

export default Home;
