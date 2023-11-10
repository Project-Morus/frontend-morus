import { ButtonContainerSC, HeaderSC, InputAndButtonsContainerSC } from "./styles";
import { TitleSC, MessageSC, QuantityTotalSC } from "../styles";
import { Button, Input } from "../../components";
import Card from "./components/Card";
import { useGetVotes } from "./controller/useGetVotes";
import { ModalPost } from "./components/ModalPost";
import { usePostVotes } from "./controller/usePostVotes";

const Orders = () => {
  const { data, count, emptyData, isLoading } = useGetVotes()
  const {
    handleSubmit,
    isShowingPost,
    postClosed,
    postOpened,
    errors,
    isPending,
    register
  } = usePostVotes()

  const messageCount = emptyData ? 'Sem ocorrências!' : `Quantidade total de ocorrências: ${count}`

  return (
    <>
      <HeaderSC>
        <div>
          <TitleSC>Votações</TitleSC>
          <MessageSC>Essa é a lista de todas as votações em abertos dos moradores do condomínio Ilha de Capri. Busque e faça o seu voto!</MessageSC>
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
            text={"Registrar Votação"}
            variant="primary"
            onClick={postOpened}
          />
        </ButtonContainerSC>
      </InputAndButtonsContainerSC>


      {data?.map(item => (
        <Card
          key={item.id}
          id={item.id}
          title={item.tema}
          description={item.descricao}
          expired_at={item.dataExpiracao}
          status={item.ativa}
        />
      ))}

      <ModalPost
        opened={isShowingPost}
        closeModal={postClosed}
        onConfirmModal={handleSubmit}
        errors={errors}
        register={register}
        isLoading={isPending}
      />

    </>
  );
};

export default Orders;
