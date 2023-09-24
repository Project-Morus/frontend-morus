import { ReactNode } from "react";
import { IButtonProps, VariantsTypes } from "./types";
import { ButtonGreen, ButtonPrimary, ButtonRed, ButtonSecondary } from "./variants";

const Button = ({ variant = "primary", ...props }: IButtonProps) => {
  const variantType: Record<VariantsTypes, ReactNode> = {
    primary: <ButtonPrimary {...props} />,
    secondary: <ButtonSecondary {...props} />,
    red: <ButtonRed {...props} />,
    green: <ButtonGreen {...props} />,
  };

  return variantType[variant];
};

export default Button;
