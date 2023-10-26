import { Input } from "../../components";
import { TitleSC, MessageSC } from "../styles";
import { useGetCommonAreas } from "./controller";
import Card from "./parts/Card";
import { CardsContainerSC, HeaderSC } from "./styles";

const CommonArea = () => {
  const { data, isError, isLoading, emptyData } = useGetCommonAreas();

  console.log(data);

  return (
    <>
      <HeaderSC>
        <div>
          <TitleSC>Áreas Comuns</TitleSC>
          <MessageSC>Essa é a lista de áreas comuns do condomínio Ilha de Capri</MessageSC>
        </div>
      </HeaderSC>
      <Input maxWidth={300} id={"search"} label={"Buscar"} />

      <CardsContainerSC>
        {data?.map((area) => (
          <Card url="area" title={area.nome} peopleLimit={area.limite} idCard={area.id} scheduleNumber={10} />
        ))}
      </CardsContainerSC>
    </>
  );
};

export default CommonArea;
