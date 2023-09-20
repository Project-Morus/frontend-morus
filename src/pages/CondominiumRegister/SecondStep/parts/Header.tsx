import IconCard from "../../../../components/IconCard";
import { TitleSC, WrapperIconAndTitleSC } from "../styles";

const Header = () => {
  return (
    <header>
      <WrapperIconAndTitleSC>
        <IconCard variant="primary" icon="ph-buildings" />

        <TitleSC>Cadastre o seu condomínio</TitleSC>
      </WrapperIconAndTitleSC>
    </header>
  );
};

export default Header;
