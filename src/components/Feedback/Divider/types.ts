import { IBaseProps } from "../../../types";

export interface IDividerProps extends IBaseProps {
  maxWidth?: number;
  marginTop?: string;
  marginBottom?: string;
  variant?: VariantsTypes;
}

export type VariantsTypes = "primary" | "secondary";
