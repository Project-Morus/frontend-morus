import { ReactNode } from "react";
import { IButtonProps, VariantsTypes } from "./types";
import ButtonPrimary from "./variants/Primary";
import ButtonSecondary from "./variants/Secondary";
import ButtonRed from "./variants/Red";
import ButtonGreen from "./variants/Green";

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
