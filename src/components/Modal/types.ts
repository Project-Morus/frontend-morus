import { ReactNode } from "react";

export interface IBackdropProps {
  children: ReactNode;
  closeModal: () => void;
}

export interface IModalProps {
  children: ReactNode;
  closeModal: () => void;
}
