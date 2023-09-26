import { useEffect, useState } from "react";

import { FormSC, InputWrapperSC } from "../styles";

import AreaData from "./AreaData";
import { Input } from "../../../../../components";

const Form = () => {
  const [areaQuantity, setAreaQuantity] = useState(0);

  const renderMultipleAreaData = (numberOfTowers: number) => {
    for (let i = 0; i <= numberOfTowers; i++) {
      <AreaData />;
    }
    return;
  };

  useEffect(() => {
    renderMultipleAreaData(areaQuantity);
  }, [areaQuantity]);

  const handleChange = (e: { target: { value: string } }) => {
    const newQuantity = parseInt(e.target.value);

    if (newQuantity >= 15) {
      setAreaQuantity(15);
      return;
    }

    setAreaQuantity(newQuantity);
  };

  return (
    <>
      <FormSC>
        <InputWrapperSC>
          <Input
            id="areaQuantity"
            label="Quantas áreas de lazer o condomínio possui?"
            value={areaQuantity}
            type="number"
            min={1}
            max={15}
            onChange={handleChange}
          />
        </InputWrapperSC>
        {Array.from({ length: areaQuantity }).map((_, index) => (
          <AreaData key={index} />
        ))}
      </FormSC>
    </>
  );
};

export default Form;
