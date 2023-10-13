import { ForgotPasswordSC, FormSC, WrapperButtonSC, WrapperInputsSC } from "../styles";
import { Button, Input } from "../../../components";
import { useLoginController } from "../useLoginController";

const Form = () => {
  const { register, handleSubmit, errors } = useLoginController()

  return (
    <FormSC onSubmit={handleSubmit}>
      <WrapperInputsSC>
        <Input
          id="e-mail"
          label="E-mail"
          placeholder="Insira o seu e-mail"
          hasError={!!errors.email}
          errorText={errors.email?.message}
          {...register('email')}
        />
        <Input
          id="passaword"
          label="Senha"
          placeholder="Insira a sua senha"
          type="password"
          autoComplete="on"
          hasError={!!errors.senha}
          errorText={errors.senha?.message}
          {...register('senha')}
        />
      </WrapperInputsSC>

      <ForgotPasswordSC to='/forgotPassword/sendEmail'>Esqueci a minha senha</ForgotPasswordSC>

      <WrapperButtonSC>
        <Button type="submit" text="Entrar" maxWidth={370} />
      </WrapperButtonSC>
    </FormSC>
  );
}

export default Form;