import Spinner from "../../../../Feedback/Spinner";
import { ButtonSecondarySC } from "../../styles";
import { IButtonProps } from "../../types";

export const ButtonSecondary = ({ text, maxWidth, isLoading, disabled, ...props }: Omit<IButtonProps, 'variant'>) => {
  return (
    <ButtonSecondarySC
      $maxWidth={maxWidth}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <Spinner /> : <span>{text}</span>}
    </ButtonSecondarySC>
  );
}