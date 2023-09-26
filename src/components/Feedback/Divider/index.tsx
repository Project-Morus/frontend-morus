import { ReactNode } from "react";
import { IDividerProps, VariantsTypes } from "./types";
import { DividerPrimary, DividerSecondary } from "./variants";

const Divider = ({ variant = "primary", ...props }: IDividerProps) => {
  const variantType: Record<VariantsTypes, ReactNode> = {
    primary: <DividerPrimary {...props} role='divider' />,
    secondary: <DividerSecondary {...props} role='divider' />,
  };

  return variantType[variant];
};

export default Divider;
