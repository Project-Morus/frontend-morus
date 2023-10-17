import Spinner from "../../../../Feedback/Spinner";
import { ButtonRedSC } from "../../styles";
import { IButtonProps } from "../../types";

export const ButtonRed = ({ text, maxWidth, isLoading, disabled, ...props }: Omit<IButtonProps, "variant">) => {
  return (
    <ButtonRedSC $maxWidth={maxWidth} disabled={disabled || isLoading} {...props}>
      {isLoading ? <Spinner /> : <span>{text}</span>}
    </ButtonRedSC>
  );
};