import { ButtonContainerSC, HeaderSC, InputAndButtonsContainerSC } from "./styles";
import { TitleSC, MessageSC, QuantityTotalSC } from "../styles";
import { Button, Input } from "../../components";
import TableOcurrence from "./parts/Table";
import Form from "./parts/Form";
import { useGetOcurrences } from "./controller";
import { useModal } from "../../hooks";

const Occurrences = () => {
  const { count, isLoading, emptyData } = useGetOcurrences()

  const { isShowing, handleModalOpened, handleModalClose } = useModal();

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
        <Input
          maxWidth={300}
          id={"search"}
          label={"Buscar"}
        />
        <ButtonContainerSC>
          <Button
            maxWidth={200}
            text={"Todos"}
            variant="secondary"
          />
          <Button
            maxWidth={200}
            text={"Nova Ocorrência"}
            variant="primary"
            onClick={handleModalOpened}
          />
        </ButtonContainerSC>
      </InputAndButtonsContainerSC>

      <TableOcurrence />

      <Form opened={isShowing} handleModalClosed={handleModalClose} />
    </>
  );
};

export default Occurrences;
