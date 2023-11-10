import { Input, Loader } from "../../components";
import { TitleSC, MessageSC } from "../styles";
import { useGetCommonAreas } from "./controller";
import Card from "./parts/Card";
import { CardsContainerSC, HeaderSC } from "./styles";
import { ContentLoaderSC } from "../styles";

const CommonArea = () => {
  const { data, isLoading } = useGetCommonAreas();

  if (isLoading)
    return (
      <ContentLoaderSC>
        <Loader />
      </ContentLoaderSC>
    );

  return (
    <>
      <HeaderSC>
        <div>
          <TitleSC>Áreas Comuns</TitleSC>
          <MessageSC>
            Essa é a lista de áreas comuns do condomínio Ilha de Capri
          </MessageSC>
        </div>
      </HeaderSC>
      <Input maxWidth={300} id={"search"} label={"Buscar"} />

      <CardsContainerSC>
        {data?.map((area) => (
          <Card
            url="area"
            title={area.nome}
            peopleLimit={area.limite}
            idCard={area.id}
            scheduleNumber={10}
          />
        ))}
      </CardsContainerSC>
    </>
  );
};

export default CommonArea;
