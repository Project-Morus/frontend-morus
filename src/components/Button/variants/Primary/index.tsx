import { ButtonPrimarySC } from "../../styles";
import { IButtonProps } from "../../types";

const ButtonPrimary = (props: Omit<IButtonProps, 'variant'>) => {
  return (
    <ButtonPrimarySC
      maxWidth={props.maxWidth}
      {...props}
    >
      <span>{props.text}</span>
    </ButtonPrimarySC>
  );
}

export default ButtonPrimary;