import { ReactNode } from "react";
import { IconNamesTypes } from "../Icon/types";

export interface IBackdropProps {
  children: ReactNode;
  closeModal: () => void;
}

export interface IModalProps extends IFormModalProps {
  variant?: VariantsTypes;
  children?: ReactNode;
  closeModal: () => void;
  onConfirmModal: () => void;
}

export interface IModalVariantsProps {
  children?: ReactNode;
  onConfirmModal: () => void;
  confirmButtonName?: string;
}

export interface IFormModalProps extends IModalVariantsProps {
  iconName?: IconNamesTypes;
  modalTitle?: string;
}

export type VariantsTypes = "confirmation" | "warning" | "form";
