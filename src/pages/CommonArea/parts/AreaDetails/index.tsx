import { Input } from "../../../../components";
import { MessageSC, TitleSC } from "../../../styles";
import { HeaderSC } from "./styles";

const AreaDetails = () => {
  return (
    <>
      <HeaderSC>
        <div>
          <TitleSC>Áreas Comuns</TitleSC>
          <MessageSC>Essa é a lista de áreas comuns do condomínio Ilha de Capri</MessageSC>
        </div>
      </HeaderSC>
      <Input maxWidth={300} id={"search"} label={"Buscar"} />
    </>
  );
};

export default AreaDetails;
