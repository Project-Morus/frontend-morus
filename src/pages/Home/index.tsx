import { useEffect, useState } from "react";
import { httpClient } from "../../services/httpClient";

import CardInformations from "./parts/CardInformations";
import { CardInformationProps } from "./parts/types";
import { useTheme } from "styled-components";
import { VictoryArea } from "victory";
import { GraphContainerSC } from "./styles";
import { Icon } from "../../components";

const Home = () => {
  const [data, setData] = useState<CardInformationProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const theme = useTheme();

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
      <GraphContainerSC>
        <div>
          <div style={{ display: "flex", gap: 4 }}>
            <h3>Consumo de energia</h3>
            <Icon stroke="fill" name="ph-drop" />
          </div>
          <VictoryArea
            interpolation="natural"
            style={{
              data: {
                fill: theme.colors.primary[100],
                stroke: theme.colors.primary[500],
                strokeWidth: 3,
                strokeLinecap: "round",
              },
            }}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 1 },
              { x: 3, y: 2 },
              { x: 4, y: 3 },
              { x: 5, y: 2 },
            ]}
          />
        </div>
        <div>
          <div style={{ display: "flex", gap: 4 }}>
            <h3>Consumo de energia</h3>
            <Icon stroke="fill" name="ph-lightning" color={theme.colors.orange[300]} />
          </div>
          <VictoryArea
            interpolation="natural"
            style={{
              data: {
                fill: theme.colors.orange[50],
                stroke: theme.colors.orange[500],
                strokeWidth: 3,
                strokeLinecap: "round",
              },
            }}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 4 },
              { x: 4, y: 3 },
              { x: 5, y: 3 },
            ]}
          />
        </div>
      </GraphContainerSC>
    </>
  );
};

export default Home;
