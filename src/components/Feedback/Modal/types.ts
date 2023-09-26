import { ReactNode } from "react";
import { IBaseProps } from "../../../types";
import { IconNamesTypes } from "../../DataDisplay/Icon/types";

export interface IBackdropProps extends IBaseProps {
  children: ReactNode;
  closeModal: () => void;
  open: boolean;
}

export interface IModalProps extends IFormModalProps {
  open: boolean;
  variant?: VariantsTypes;
  children?: ReactNode;
  closeModal: () => void;
  onConfirmModal: () => void;
}

export interface IModalVariantsProps extends IBaseProps {
  children?: ReactNode;
  onConfirmModal: () => void;
  confirmButtonName?: string;
  buttonLabel?: string;
}

export interface IFormModalProps extends IModalVariantsProps {
  iconName?: IconNamesTypes;
  modalTitle?: string;
}

export type VariantsTypes = "confirmation" | "warning" | "form";
