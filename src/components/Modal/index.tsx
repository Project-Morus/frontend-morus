import { ReactNode } from "react";
import { IModalProps, VariantsTypes } from "./types";
import ConfirmationModal from "./variants/Confirmation";
import WarningModal from "./variants/Warning";
import Backdrop from "./parts/Backdrop";
import FormModal from "./variants/Form";

const Modal = ({
  variant = "confirmation",
  closeModal,
  children,
  onConfirmModal,
  iconName,
  modalTitle,
  confirmButtonName,
}: IModalProps) => {
  const variantType: Record<VariantsTypes, ReactNode> = {
    confirmation: (
      <ConfirmationModal onConfirmModal={onConfirmModal} confirmButtonName={confirmButtonName}>
        {children}
      </ConfirmationModal>
    ),
    warning: (
      <WarningModal onConfirmModal={onConfirmModal} confirmButtonName={confirmButtonName}>
        {children}
      </WarningModal>
    ),
    form: (
      <FormModal
        onConfirmModal={onConfirmModal}
        iconName={iconName!}
        modalTitle={modalTitle}
        confirmButtonName={confirmButtonName}
      >
        {children}
      </FormModal>
    ),
  };

  return <Backdrop closeModal={closeModal}>{variantType[variant]}</Backdrop>;
};

export default Modal;
