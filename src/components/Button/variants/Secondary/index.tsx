import { ButtonSecondarySC } from "../../styles";
import { IButtonProps } from "../../types";

const ButtonSecondary = (props: Omit<IButtonProps, 'variant'>) => {
  return (
    <ButtonSecondarySC
      maxWidth={props.maxWidth}
      {...props}
    >
      <span>{props.text}</span>
    </ButtonSecondarySC>
  );
}

export default ButtonSecondary;