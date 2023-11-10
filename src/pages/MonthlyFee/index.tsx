import { Button, Input } from "../../components";
import { MessageSC, QuantityTotalSC, TitleSC } from "../styles";
import { useGetMonthlyFee } from "./controller/useGetMonthlyFee";
import TableMonthlyFee from "./parts/Table";
import {
  ButtonContainerSC,
  HeaderSC,
  InputAndButtonsContainerSC,
} from "./styles";

export default function MonthlyFee() {
  const { data, count, emptyData, isLoading } = useGetMonthlyFee();

  const messageCount = emptyData
    ? "Sem ocorrências!"
    : `Quantidade total de taxas mensais: ${count}`;

  return (
    <>
      <HeaderSC>
        <div>
          <TitleSC>Taxas Mensais</TitleSC>
          <MessageSC>
            Essa é a lista de todas as taxas mensais cadastradas dos morados do
            condomínio Ilha de Capri. Busque ou adicione por taxas mensais!
          </MessageSC>
        </div>
        <QuantityTotalSC>
          {isLoading ? "Carregando..." : messageCount}
        </QuantityTotalSC>
      </HeaderSC>

      <InputAndButtonsContainerSC>
        <Input maxWidth={300} id={"search"} label={"Buscar"} />
        <ButtonContainerSC>
          <Button maxWidth={200} text={"Todos"} variant="secondary" />
          <Button
            maxWidth={200}
            text={"Registrar Transação"}
            variant="primary"
            // onClick={postOpened}
          />
        </ButtonContainerSC>
      </InputAndButtonsContainerSC>

      <TableMonthlyFee data={data ? data : []} isLoading={isLoading} />
    </>
  );
}
