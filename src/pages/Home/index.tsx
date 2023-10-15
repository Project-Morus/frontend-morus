import { useEffect, useState } from "react";
<<<<<<< HEAD
import toast from "react-hot-toast";
import { httpClient } from "../../services/httpClient";

=======
>>>>>>> b83e02e (Revert "Merge branch 'main' of https://github.com/Project-Morus/frontend-morus")
import CardInformations from "./parts/CardInformations";
import api from "../../services/api/api";
import { CardInformationProps } from "./parts/types";

<<<<<<< HEAD
import { ContainerSC } from "./styles";

=======
>>>>>>> b83e02e (Revert "Merge branch 'main' of https://github.com/Project-Morus/frontend-morus")
const Home = () => {
  const [data, setData] = useState<CardInformationProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("entrou no try");
        const response = await api.get("api/ListarInformacao");
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

  return <>{renderList()}</>;
};

export default Home;
