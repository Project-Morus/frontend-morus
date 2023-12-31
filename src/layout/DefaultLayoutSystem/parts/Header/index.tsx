import { Button } from "../../../../components";
import { useAuth } from "../../../../hooks";
import {
  HeaderSC,
  ContentResidentSC,
  WrapperResidentSC,
  TagSC,
  DateNowSC,
  NameResidentSC,
  WrapperActionsSC,
  InfoResidentSC,
} from "./styles";

const Header = () => {
  const { signOut } = useAuth()
  return (
    <HeaderSC>
      <ContentResidentSC>
        <WrapperResidentSC>
          <DateNowSC>19 de janeiro de 2002</DateNowSC>
          <TagSC>Síndico(a)</TagSC>
        </WrapperResidentSC>

        <NameResidentSC>Morador: Eduarda Simone</NameResidentSC>
      </ContentResidentSC>
      <WrapperActionsSC>
        <InfoResidentSC>Ilha de Capri | Torre A | Apartamento 1103 </InfoResidentSC>
        <Button text="Logout" maxWidth={198} onClick={signOut} />
      </WrapperActionsSC>
    </HeaderSC>
  );
};

export default Header;