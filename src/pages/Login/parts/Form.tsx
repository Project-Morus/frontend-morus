import { useState } from "react";
import { useLoginController } from "../useLoginController";
import { CustomBoxSC, CustomLinkSC, FormSC, WrapperButtonSC, WrapperInputsSC } from "../styles";
import { Button, Input } from "../../../components";

const Form = () => {
  const { register, handleSubmit, errors, isLoading } = useLoginController()
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  }

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
          iconName="ph-at"
        />

        <Input
          id="passaword"
          label="Senha"
          placeholder="Insira a sua senha"
          type={passwordShown ? 'text' : 'password'}
          onClick={togglePassword}
          iconName={passwordShown ? 'ph-eye-slash' : 'ph-eye'}
          autoComplete="on"
          hasError={!!errors.senha}
          errorText={errors.senha?.message}
          {...register('senha')}
        />
      </WrapperInputsSC>

      <CustomBoxSC>
        <CustomLinkSC to='/forgotPassword/sendEmail'>
          Esqueci a minha senha
        </CustomLinkSC>
      </CustomBoxSC>

      <WrapperButtonSC>
        <Button type="submit" text='Entrar' maxWidth={370} isLoading={isLoading} />
      </WrapperButtonSC>
    </FormSC>
  );
}

export default Form;