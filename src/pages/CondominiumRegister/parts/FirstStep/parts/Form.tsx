import { FormEvent, useState } from "react";

import { FormSC, SubtitleSC, WrapperDivideInTwoSC, WrapperSC } from "../styles";

import { useTheme } from "styled-components";
import { Divider, Input, RadioButtonGroup } from "../../../../../components";

const Form = () => {
  const theme = useTheme();

  const [selectedValue, setSelectedValue] = useState<string>("Sim");

  const drinkSelectionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmitAuth = (e: FormEvent) => {
    e.preventDefault();

    console.log("Submit Login Sucess");
  };

  return (
    <WrapperSC>
      <FormSC onSubmit={handleSubmitAuth}>
        <WrapperDivideInTwoSC>
          <RadioButtonGroup
            label="Seu condomínio possui porteiro?"
            name="yes-or-no"
            options={[{ label: "Sim" }, { label: "Não" }]}
            onChange={drinkSelectionHandler}
          />
        </WrapperDivideInTwoSC>
        <WrapperDivideInTwoSC>
          <Input id="name" label="Nome" placeholder="Insira o nome do condomínio" />
          <Input id="towers" label="Quantidade de Torres" placeholder="Ex: 3" />
        </WrapperDivideInTwoSC>

        <Divider variant="secondary" marginTop={theme.spacing[8]} marginBottom={theme.spacing[8]} />

        <SubtitleSC>Localização</SubtitleSC>

        <WrapperDivideInTwoSC>
          <Input id="street" label="Logradouro" placeholder="Insira o nome do logradouro" />
          <Input maxWidth={100} id="number" label="Número" placeholder="Ex: 1804" />
        </WrapperDivideInTwoSC>

        <WrapperDivideInTwoSC>
          <Input maxWidth={150} id="cep" label="CEP" placeholder="Ex: 29000120" />
          <Input id="neighborhood" label="Bairro" placeholder="Insira o nome do bairro" />
        </WrapperDivideInTwoSC>

        <WrapperDivideInTwoSC>
          <Input id="state" label="Estado" placeholder="Insira o nome do estado" />
          <Input id="city" label="Cidade" placeholder="Insira o nome da cidade" />
        </WrapperDivideInTwoSC>
      </FormSC>
    </WrapperSC>
  );
};

export default Form;
