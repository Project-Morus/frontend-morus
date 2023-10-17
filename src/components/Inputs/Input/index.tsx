import { forwardRef } from "react";
import { ContainerSC, InputSC, LabelSC, ErrorTextSC } from "./styles";
import { IInputProps } from "./types";

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ id, maxWidth, hasError, label, errorText, disabled, ...props }, ref) => {
    return (
      <ContainerSC $maxWidth={maxWidth}>
        <LabelSC $disabled={disabled} htmlFor={id}>
          {label}
        </LabelSC>
        <ContentSC>
          <InputSC
            disabled={disabled}
            $hasError={hasError}
            $iconName={!!iconName}
            id={id}
            ref={ref}
            {...props} />
          {!!iconName && <CustomIconSC name={iconName} onClick={onClick} />}
        </ContentSC>

        {hasError && <ErrorTextSC>{errorText}</ErrorTextSC>}
      </ContainerSC>
    );
  }
);

export default Input;
