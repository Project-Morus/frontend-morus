import { ReactNode } from "react";

export interface IBackdropProps {
  children: ReactNode;
  closeModal: () => void;
}

export interface IModalProps {
  variant?: VariantsTypes;
  children?: ReactNode;
  closeModal: () => void;
  onConfirmModal: () => void;
}

export interface IModalVariantsProps {
  children?: ReactNode;
  onConfirmModal: () => void;
}

export type VariantsTypes = "confirmation" | "warning" | "iconAndTitle";
