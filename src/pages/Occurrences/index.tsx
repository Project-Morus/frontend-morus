import { useState } from "react";
import { ButtonContainerSC, HeaderSC, InputAndButtonsContainerSC } from "./styles";
import { TitleSC, MessageSC, QuantityTotalSC } from "../styles";
import { Button, Input, Modal } from "../../components";
import { useGetOcurrences } from "./controller/useGetOccurences";
import TableOcurrence from "./parts/Table";
import Form from "./parts/Form";

const Occurrences = () => {
  const { count, isLoading, emptyData } = useGetOcurrences()
  const [opened, setOpened] = useState<boolean>(false);

  const messageCount = emptyData ? 'Sem ocorrências!' : `Quantidade total de ocorrências: ${count}`

  const handleModalOpened = () => setOpened(true)
  const handleModalClosed = () => setOpened(false)

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

      <Modal
        variant="form"
        modalTitle="Cadastrar nova ocorrência"
        open={opened}
        closeModal={handleModalClosed}
        onConfirmModal={() => console.log('oi')}
      >
        <Form />
      </Modal>

      <TableOcurrence />
    </>
  );
};

export default Occurrences;
