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
<<<<<<< HEAD
        <ContentSC>
          <InputSC disabled={disabled} $hasError={hasError} $iconName={!!iconName} id={id} ref={ref} {...props} />
          {!!iconName && <CustomIconSC name={iconName} onClick={onClick} />}
        </ContentSC>
=======
        <InputSC disabled={disabled} $hasError={hasError} id={id} ref={ref} {...props} />
>>>>>>> b83e02e (Revert "Merge branch 'main' of https://github.com/Project-Morus/frontend-morus")

        {hasError && <ErrorTextSC>{errorText}</ErrorTextSC>}
      </ContainerSC>
    );
  }
);

export default Input;
