import { IconCard } from "../../../../components";
import { TextSC, TitleSC, WrapperIconSquareSC } from "../styles";

const Header = () => {
  return (
    <header>
      <WrapperIconSquareSC>
        <IconCard icon='ph-fingerprint-simple' />
      </WrapperIconSquareSC>

      <TitleSC>Escolha uma nova senha </TitleSC>

      <TextSC>Essa nova senha será a sua senha após a confirmação.</TextSC>
    </header>
  );
};

export default Header;
