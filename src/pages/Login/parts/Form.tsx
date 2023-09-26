import { FormEvent } from "react";
import { ForgotPasswordSC, FormSC, WrapperButtonSC, WrapperInputsSC } from "../styles";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../../components";

const Form = () => {
  const navigate = useNavigate();

  const handleSubmitAuth = (e: FormEvent) => {
    e.preventDefault()

    console.log('Submit Login Sucess')
  }
  return (
    <FormSC onSubmit={handleSubmitAuth}>
      <WrapperInputsSC>
        <Input id="e-mail" label="E-mail" placeholder="Insira o seu e-mail" />
        <Input id="passaword" label="Senha" placeholder="Insira a sua senha" type="password" />
      </WrapperInputsSC>

      <ForgotPasswordSC to='/forgotPassword/sendEmail'>Esqueci a minha senha</ForgotPasswordSC>

      <WrapperButtonSC>
        <Button text="Entrar" maxWidth={370} onClick={() => navigate('/system/home')} />
      </WrapperButtonSC>
    </FormSC>
  );
}

export default Form;