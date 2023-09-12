import { useState } from "react";
import RadioButtonGroup from "../../components/RadioButtonGroup";
import { RADIO_BUTTON_GROUP_DATA } from "../../__tests__/components/RadioButtonGroup/mockData";

const LandingPage = () => {
  const [selectedValue, setSelectedValue] = useState<string>(RADIO_BUTTON_GROUP_DATA[0].label);


  function drinkSelectionHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedValue(event.target.value);
  }

  return (
    <>
      <h1>Landing Page</h1>

      <RadioButtonGroup options={RADIO_BUTTON_GROUP_DATA} label="Bebidas" onChange={drinkSelectionHandler} />

      <p style={{ marginTop: '1rem' }}>Radio selecionado: {selectedValue}</p>
    </>
  );
}

export default LandingPage;