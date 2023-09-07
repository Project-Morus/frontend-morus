import { TextSC, TitleSC } from "../styles";

const Header = () => {
  return (
    <header>
      <TitleSC>Esqueceu sua senha? </TitleSC>

      <TextSC>
        Não se preocupe. Basta inserir seu e-mail registrado abaixo, e enviaremos instruções para a recuperação da sua
        senha.
      </TextSC>
    </header>
  );
};

export default Header;
