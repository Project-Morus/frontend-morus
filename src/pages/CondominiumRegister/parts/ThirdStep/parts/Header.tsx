
import { IconCard } from "../../../../../components";
import { TitleSC, WrapperIconAndTitleSC } from "../styles";

const Header = () => {
  return (
    <header>
      <WrapperIconAndTitleSC>
        <IconCard variant="primary" icon="ph-buildings" />

        <TitleSC>Cadastre as áreas de Lazer</TitleSC>
      </WrapperIconAndTitleSC>
    </header>
  );
};

export default Header;
