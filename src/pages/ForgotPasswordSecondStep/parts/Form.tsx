import { FormEvent } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { FormSC, WarningTextSC, WrapperButtonSC } from "../styles";
import Divider from "../../../components/Divider";
import { useTheme } from "styled-components";

const Form = () => {
  const theme = useTheme();

  const handleSubmitAuth = (e: FormEvent) => {
    e.preventDefault();

    console.log("Submit Login Sucess");
  };

  return (
    <FormSC onSubmit={handleSubmitAuth}>
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
