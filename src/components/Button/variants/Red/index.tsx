import { ButtonRedSC } from "../../styles";
import { IButtonProps } from "../../types";

export const ButtonRed = ({ text, maxWidth, ...props }: Omit<IButtonProps, "variant">) => {
  return (
    <ButtonRedSC $maxWidth={maxWidth} {...props}>
      <span>{text}</span>
    </ButtonRedSC>
  );
};
