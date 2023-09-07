import { ReactNode } from "react";
import { IDividerProps, VariantsTypes } from "./types";
import DividerPrimary from "./variants/Primary";
import DividerSecondary from "./variants/Secondary";

const Divider = ({ variant = "primary", ...props }: IDividerProps) => {
  const variantType: Record<VariantsTypes, ReactNode> = {
    primary: <DividerPrimary {...props} />,
    secondary: <DividerSecondary {...props} />,
  };

  return variantType[variant];
};

export default Divider;
