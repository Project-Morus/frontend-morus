import Aside from "../../components/Aside";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  ContentSC,
  FooterSC,
  ForgotPasswordSC,
  FormSC,
  TextSC,
  TitleSC,
  WithoutAccountSC,
  WrapperButtonSC,
  WrapperSC
} from "./styles";

const Login = () => {

  const handleSubmit = () => { }

  return (
    <main>
      <Aside position="left">
        <WrapperSC>

          <ContentSC>
            <TitleSC>
              Bem vindo!
            </TitleSC>

            <TextSC>Seja parte ativa da vida condominial! Faça login para participar de enquetes, reservar espaços e colaborar para um ambiente ainda melhor!</TextSC>

            <FormSC onSubmit={() => console.log('Enviou')}>
              <Input id="e-mail" label="E-mail" placeholder="Insira o seu e-mail" />
              <Input id="passaword" label="Senha" placeholder="Insira a sua senha" type="password" />

              <ForgotPasswordSC>Esqueci a minha senha</ForgotPasswordSC>

              <WrapperButtonSC>
                <Button text="Entrar" maxWidth={370} />
              </WrapperButtonSC>
            </FormSC>

            <WithoutAccountSC>Ainda não possui uma conta? <strong style={{ display: 'inline-block' }}>Cadastre-se aqui</strong></WithoutAccountSC>

          </ContentSC>
        </WrapperSC>
      </Aside>
    </main>
  );
};

export default Login;
