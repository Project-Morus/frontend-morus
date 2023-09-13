import { FormEvent, useState } from "react";

import { CentralizerSC, FormSC, SubtitleSC, WrapperDivideInTwo } from "../styles";

import { useTheme } from "styled-components";
import Input from "../../../../components/Input";
import Divider from "../../../../components/Divider";
import SequencialStepper from "../../../../components/SequencialStepper";
import RadioButtonGroup from "../../../../components/RadioButtonGroup";

const Form = () => {
  const theme = useTheme();

  const [selectedValue, setSelectedValue] = useState<string>("Sim");

  function drinkSelectionHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedValue(event.target.value);
  }

  const handleSubmitAuth = (e: FormEvent) => {
    e.preventDefault();

    console.log("Submit Login Sucess");
  };

  return (
    <>
      <FormSC onSubmit={handleSubmitAuth}>
        <WrapperDivideInTwo>
          <RadioButtonGroup
            label="Seu condomínio possui porteiro?"
            options={[
              { label: "Sim", name: "yes" },
              { label: "Não", name: "no" },
            ]}
            onChange={() => drinkSelectionHandler}
          ></RadioButtonGroup>
        </WrapperDivideInTwo>
        <WrapperDivideInTwo>
          <Input id="name" label="Nome" placeholder="Insira o nome do condomínio" />
          <Input id="towers" label="Quantidade de Torres" placeholder="Ex: 3" />
        </WrapperDivideInTwo>

        <Divider variant="secondary" marginTop={theme.spacing[8]} marginBottom={theme.spacing[8]} />

        <SubtitleSC>Localização</SubtitleSC>

        <WrapperDivideInTwo>
          <Input id="street" label="Logradouro" placeholder="Insira o nome do logradouro" />
          <Input maxWidth={100} id="number" label="Número" placeholder="Ex: 1804" />
        </WrapperDivideInTwo>

        <WrapperDivideInTwo>
          <Input maxWidth={150} id="cep" label="CEP" placeholder="Ex: 29000120" />
          <Input id="neighborhood" label="Bairro" placeholder="Insira o nome do bairro" />
        </WrapperDivideInTwo>

        <WrapperDivideInTwo>
          <Input id="state" label="Estado" placeholder="Insira o nome do estado" />
          <Input id="city" label="Cidade" placeholder="Insira o nome da cidade" />
        </WrapperDivideInTwo>
      </FormSC>

      <CentralizerSC>
        <SequencialStepper items={[0, 1, 2]} currentStep={0} />
      </CentralizerSC>
    </>
  );
};

export default Form;