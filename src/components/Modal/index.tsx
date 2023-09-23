import { ReactNode } from "react";
import { IModalProps, VariantsTypes } from "./types";
import ConfirmationModal from "./variants/Confirmation";
import WarningModal from "./variants/Warning";
import IconAndTitleModal from "./variants/IconAndTitle";
import Backdrop from "./parts/Backdrop";

const Modal = ({ variant = "confirmation", closeModal, children, onConfirmModal }: IModalProps) => {
  const variantType: Record<VariantsTypes, ReactNode> = {
    confirmation: <ConfirmationModal onConfirmModal={onConfirmModal}>{children}</ConfirmationModal>,
    warning: <WarningModal onConfirmModal={onConfirmModal}>{children}</WarningModal>,
    iconAndTitle: <IconAndTitleModal onConfirmModal={onConfirmModal}>{children}</IconAndTitleModal>,
  };

  return <Backdrop closeModal={closeModal}>{variantType[variant]}</Backdrop>;
};

export default Modal;
