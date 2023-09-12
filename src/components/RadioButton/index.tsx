import { LabelSC, RadioSC, WrapperSC } from "./styles";
import { IRadioButtonProps } from "./types";

const RadioButton = ({ label = '', id, disabled = false, ...props }: IRadioButtonProps) => {

  return (
    <WrapperSC $disabled={disabled}>
      <RadioSC
        type="radio"
        id={id}
        disabled={disabled}
        {...props}
      />
      <LabelSC htmlFor={id} $disabled={disabled}>{label}</LabelSC>
    </WrapperSC>
  );
}

export default RadioButton;