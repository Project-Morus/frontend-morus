import { FormEvent } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { FormSC, WrapperButtonSC } from "../styles";
import Divider from "../../../components/Divider";

const Form = () => {
  const handleSubmitAuth = (e: FormEvent) => {
    e.preventDefault();

    console.log("Submit Login Sucess");
  };

  return (
    <FormSC onSubmit={handleSubmitAuth}>
      <Input id="e-mail" label="E-mail" placeholder="Insira o seu e-mail" />

      <Divider variant="secondary" marginTop={50} marginBottom={50} />

      <WrapperButtonSC>
        <Button text="Enviar" maxWidth={370} />
      </WrapperButtonSC>
    </FormSC>
  );
};

export default Form;
