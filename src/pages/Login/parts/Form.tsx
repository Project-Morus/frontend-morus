import { FormEvent } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { ForgotPasswordSC, FormSC, WrapperButtonSC } from "../styles";

const Form = () => {
  const handleSubmitAuth = (e: FormEvent) => {
    e.preventDefault()

    console.log('Submit Login Sucess')
  }
  return (
    <FormSC onSubmit={handleSubmitAuth}>
      <Input id="e-mail" label="E-mail" placeholder="Insira o seu e-mail" />
      <Input id="passaword" label="Senha" placeholder="Insira a sua senha" type="password" />

      <ForgotPasswordSC to='/forgotPassword/sendEmail'>Esqueci a minha senha</ForgotPasswordSC>

      <WrapperButtonSC>
        <Button text="Entrar" maxWidth={370} />
      </WrapperButtonSC>
    </FormSC>
  );
}

export default Form;