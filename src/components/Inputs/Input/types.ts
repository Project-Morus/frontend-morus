import { InputHTMLAttributes } from "react";
import { IconNamesTypes } from "../../DataDisplay/Icon/types";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  errorText?: string;
  hasError?: boolean;
  maxWidth?: number;
  iconName?: IconNamesTypes;
  onClick?: () => void;
}
