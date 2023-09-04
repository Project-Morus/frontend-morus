import { ReactNode } from "react";
import { IButtonProps, VariantsTypes } from "./types";
import ButtonPrimary from "./variants/Primary";
import ButtonSecondary from "./variants/Secondary";

const Button = ({ variant = "primary", ...props }: IButtonProps) => {
  const variantType: Record<VariantsTypes, ReactNode> = {
    primary: <ButtonPrimary {...props} />,
    secondary: <ButtonSecondary {...props} />
  }

  return variantType[variant]
}

export default Button;