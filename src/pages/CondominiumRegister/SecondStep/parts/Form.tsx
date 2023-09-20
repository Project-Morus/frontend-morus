import { useEffect, useState } from "react";

import { FormSC, InputWrapperSC } from "../styles";

import TowerData from "./TowerData";
import Input from "../../../../components/Input";

const Form = () => {
  const [towerQuantity, setTowerQuantity] = useState(1);

  const renderMultipleTowerData = (numberOfTowers: number) => {
    for (let i = 0; i <= numberOfTowers; i++) {
      <TowerData />;
    }
    return;
  };

  useEffect(() => {
    renderMultipleTowerData(towerQuantity);
  }, [towerQuantity]);

  const handleChange = (e: { target: { value: string } }) => {
    const newQuantity = parseInt(e.target.value);

    if (newQuantity >= 15) {
      setTowerQuantity(15);
      return;
    }

    setTowerQuantity(newQuantity);
  };

  return (
    <>
      <FormSC>
        <InputWrapperSC>
          <Input
            id="towerQuantity"
            label="Quantas torres o condomínio possui?"
            value={towerQuantity}
            type="number"
            min={1}
            max={15}
            onChange={handleChange}
          />
        </InputWrapperSC>
        {Array.from({ length: towerQuantity }).map((_, index) => (
          <TowerData key={index} />
        ))}
      </FormSC>
    </>
  );
};

export default Form;
