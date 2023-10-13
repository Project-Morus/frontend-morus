import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  maxWidth?: number;
  variant?: VariantsTypes;
  isLoading?: boolean;
  disabled?: boolean;
}

export type VariantsTypes = "primary" | "secondary" | "red" | "green";
