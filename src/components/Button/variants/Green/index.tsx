import { ButtonGreenSC } from "../../styles";
import { IButtonProps } from "../../types";

const ButtonGreen = ({ text, maxWidth, ...props }: Omit<IButtonProps, "variant">) => {
  return (
    <ButtonGreenSC $maxWidth={maxWidth} {...props}>
      <span>{text}</span>
    </ButtonGreenSC>
  );
};

export default ButtonGreen;
