import Spinner from "../../../../Feedback/Spinner";
import { ButtonPrimarySC } from "../../styles";
import { IButtonProps } from "../../types";

export const ButtonPrimary = ({ text, maxWidth, isLoading, disabled, ...props }: Omit<IButtonProps, 'variant'>) => {
  return (
    <ButtonPrimarySC
      $maxWidth={maxWidth}
      disabled={disabled || isLoading}
      {...props}
    >
      {!isLoading && <span>{text}</span>}
      {isLoading && <Spinner />}
    </ButtonPrimarySC>
  );
}