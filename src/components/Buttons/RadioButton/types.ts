import { InputHTMLAttributes } from "react";

export interface IRadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string,
  label: string,
  disabled?: boolean,
}