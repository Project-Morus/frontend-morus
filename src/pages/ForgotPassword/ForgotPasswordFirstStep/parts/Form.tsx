import { FormEvent } from "react";

import { FormSC, WrapperButtonSC } from "../styles";

import { useTheme } from "styled-components";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import Divider from "../../../../components/Divider";

const Form = () => {
  const theme = useTheme()

  const handleSubmitAuth = (e: FormEvent) => {
    e.preventDefault();

    console.log("Submit Login Sucess");
  };

  return (
    <FormSC onSubmit={handleSubmitAuth}>
      <Input id="e-mail" label="E-mail" placeholder="Insira o seu e-mail" />

      <Divider variant="secondary" marginTop={theme.spacing[14]} marginBottom={theme.spacing[14]} />

      <WrapperButtonSC>
        <Button text="Enviar" maxWidth={370} />
      </WrapperButtonSC>
    </FormSC>
  );
};

export default Form;
