import { RadioSC, WrapperSC } from "./styles";

const RadioButton = () => {
  return (
    <WrapperSC>
      <RadioSC type="radio" id='propsid' name='propsName' value="propsValue" />
      <label htmlFor="propsid">Email</label>
    </WrapperSC>
  );
}

export default RadioButton;