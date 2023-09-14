import { FormEvent } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { ForgotPasswordSC, FormSC, WrapperButtonSC, WrapperInputsSC } from "../styles";

const Form = () => {
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
        <Button text="Entrar" maxWidth={370} />
      </WrapperButtonSC>
    </FormSC>
  );
}

export default Form;