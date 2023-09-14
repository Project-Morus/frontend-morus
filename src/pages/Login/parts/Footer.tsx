import { SignUpSC, WithoutAccountSC } from "../styles";

const Footer = () => {
  return (
    <WithoutAccountSC>
      Ainda não cadastrou o seu condomínio? <SignUpSC to="">Cadastre aqui</SignUpSC>
    </WithoutAccountSC>
  );
};

export default Footer;
