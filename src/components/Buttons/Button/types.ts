import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  maxWidth?: number;
  variant?: VariantsTypes;
}

export type VariantsTypes = "primary" | "secondary" | "red" | "green";
