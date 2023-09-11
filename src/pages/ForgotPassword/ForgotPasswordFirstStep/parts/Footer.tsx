import { SignUpSC, WithoutAccountSC } from "../styles";

const Footer = () => {
  return (
    <WithoutAccountSC>Ainda não possui uma conta? <SignUpSC to=''>Cadastre-se aqui</SignUpSC></WithoutAccountSC>
  );
}

export default Footer;