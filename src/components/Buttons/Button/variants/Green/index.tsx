import Spinner from "../../../../Feedback/Spinner";
import { ButtonGreenSC } from "../../styles";
import { IButtonProps } from "../../types";

export const ButtonGreen = ({ text, maxWidth, isLoading, disabled, ...props }: Omit<IButtonProps, "variant">) => {
  return (
    <ButtonGreenSC $maxWidth={maxWidth} disabled={disabled || isLoading} {...props}>
      {isLoading ? <Spinner /> : <span>{text}</span>}
    </ButtonGreenSC>
  );
};