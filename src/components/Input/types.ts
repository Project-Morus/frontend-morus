import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  errorText?: string;
  hasError?: boolean;
  maxWidth?: number;
}
