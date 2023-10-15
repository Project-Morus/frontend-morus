
import { ButtonContainerSC, ContentLoaderSC, HeaderSC, InputAndButtonsContainerSC } from "./styles";
import { TitleSC, MessageSC, QuantityTotalSC } from "../styles";
import { Button, Input, Loader } from "../../components";
import { useGetOcurrences } from "./controller/useGetOccurences";
import TableOcurrence from "./parts/Table";

const Occurrences = () => {
  const { count, emptyData, isLoading } = useGetOcurrences()

  const messageCount = emptyData ? 'Sem ocorrências!' : `Quantidade total de ocorrências: ${count}`

  return (
    <>
      <HeaderSC>
        <div>
          <TitleSC>Ocorrências</TitleSC>
          <MessageSC>Essa é a lista de todas as ocorrência cadastradas dos morados do condomínio Ilha de Capri. Busque ou adicione ocorrências!</MessageSC>
        </div>
        <QuantityTotalSC>
          {isLoading ? 'Carregando...' : messageCount}
        </QuantityTotalSC>
      </HeaderSC>

      <InputAndButtonsContainerSC>
        <Input maxWidth={300} id={"search"} label={"Buscar"} />
        <ButtonContainerSC>
          <Button maxWidth={200} text={"Todos"} variant="secondary" />
        </ButtonContainerSC>
      </InputAndButtonsContainerSC>

      {isLoading ?
        <ContentLoaderSC>
          <Loader />
        </ContentLoaderSC>
        : <TableOcurrence />
      }
    </>
  );
};

export default Occurrences;
