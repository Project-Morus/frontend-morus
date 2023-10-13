import { forwardRef } from "react";
import { ContainerSC, InputSC, LabelSC, ErrorTextSC } from "./styles";
import { IInputProps } from "./types";

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ id, maxWidth, hasError, label, errorText, disabled, ...props }, ref) => {
    return (
      <ContainerSC $maxWidth={maxWidth}>
        <LabelSC $hasError={hasError} $disabled={disabled} htmlFor={id}>
          {label}
        </LabelSC>
        <InputSC disabled={disabled} $hasError={hasError} id={id} ref={ref} {...props} />

        {hasError && <ErrorTextSC>{errorText}</ErrorTextSC>}
      </ContainerSC>
    );
  }
);

export default Input;
