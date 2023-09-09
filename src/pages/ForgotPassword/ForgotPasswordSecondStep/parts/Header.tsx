import { IconSquareSC, TextSC, TitleSC, WrapperIconSquareSC } from "../styles";

const Header = () => {
  return (
    <header>
      <WrapperIconSquareSC>
        <IconSquareSC>
          <p>Icon</p>
        </IconSquareSC>
      </WrapperIconSquareSC>

      <TitleSC>Escolha uma nova senha </TitleSC>

      <TextSC>Essa nova senha será a sua senha após a confirmação.</TextSC>
    </header>
  );
};

export default Header;
