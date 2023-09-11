import { ButtonSecondarySC } from "../../styles";
import { IButtonProps } from "../../types";

const ButtonSecondary = ({ text, maxWidth, ...props }: Omit<IButtonProps, 'variant'>) => {
  return (
    <ButtonSecondarySC
      $maxWidth={maxWidth}
      {...props}
    >
      <span>{text}</span>
    </ButtonSecondarySC>
  );
}

export default ButtonSecondary;