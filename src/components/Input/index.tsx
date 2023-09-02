import { forwardRef, useId } from "react";
import { ContainerSC, InputSC, LabelSC, HelperTextSC } from "./styles";
import { IInputProps } from "./types";

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ hasError, label, helperText, ...props }, ref) => {
    const inputId = useId();

    return (
      <ContainerSC>
        <LabelSC htmlFor={inputId}>{label}</LabelSC>
        <InputSC hasError={hasError} id={inputId} ref={ref} {...props} />

        {hasError && <HelperTextSC>{helperText}</HelperTextSC>}
      </ContainerSC>
    );
  }
);

export default Input;
