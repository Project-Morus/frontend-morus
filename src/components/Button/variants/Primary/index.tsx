import { ButtonPrimarySC } from "../../styles";
import { IButtonProps } from "../../types";

export const ButtonPrimary = ({ text, maxWidth, ...props }: Omit<IButtonProps, 'variant'>) => {
  return (
    <ButtonPrimarySC
      $maxWidth={maxWidth}
      {...props}
    >
      <span>{text}</span>
    </ButtonPrimarySC>
  );
}