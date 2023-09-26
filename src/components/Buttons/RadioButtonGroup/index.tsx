import RadioButton from "../RadioButton";
import { FieldsetSC, WrapperSC } from "./styles";
import { IOptionGroupProps, IOptionProps } from "./types";

const RadioButtonGroup = ({ label = "", options, onChange, required, name }: IOptionGroupProps) => {
  const renderOptions = () => {
    return options.map(({ label, disabled }: IOptionProps, index) => {
      const shortenedOptionLabel = label.replace(/\s+/g, "");
      const optionId = `radio-option-${shortenedOptionLabel}`;

      return (
        <RadioButton
          key={optionId}
          value={label}
          label={label}
          id={optionId}
          name={name}
          required={required}
          disabled={disabled}
          defaultChecked={index === 0}
          onChange={onChange}
        />
      );
    });
  };

  return (
    <FieldsetSC>
      <legend>{label}</legend>
      <WrapperSC>{renderOptions()}</WrapperSC>
    </FieldsetSC>
  );
};

export default RadioButtonGroup;
