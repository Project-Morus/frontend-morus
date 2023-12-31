import { FormEvent } from "react";
import { FormSC, WarningTextSC, WrapperButtonSC } from "../styles";
import { useTheme } from "styled-components";
import { Button, Divider, Input } from "../../../../components";

const Form = () => {
  const theme = useTheme();

  const handleSubmitNewPassword = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <FormSC onSubmit={handleSubmitNewPassword}>
      <Input id="new-password" label="Nova senha" placeholder="Senha" />
      <WarningTextSC>
        Sua nova senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais. Além disso, deve
        conter no mínimo 8 caracteres.
      </WarningTextSC>

      <Input id="confirm-new-password" label="Confirme a nova senha" placeholder="Senha" />

      <Divider variant="secondary" marginTop={theme.spacing[14]} marginBottom={theme.spacing[14]} />

      <WrapperButtonSC>
        <Button text="Enviar" maxWidth={370} />
      </WrapperButtonSC>
    </FormSC>
  );
};

export default Form;
