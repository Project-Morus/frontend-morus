import { ReactNode } from "react";
import { IModalProps, VariantsTypes } from "./types";
import Backdrop from "./parts/Backdrop";
import { ConfirmationModal, WarningModal, FormModal } from "./variants";


const Modal = ({
  variant = "confirmation",
  closeModal,
  children,
  onConfirmModal,
  iconName,
  modalTitle,
  confirmButtonName,
  label
}: IModalProps) => {
  const variantType: Record<VariantsTypes, ReactNode> = {
    confirmation: (
      <ConfirmationModal
        onConfirmModal={onConfirmModal}
        confirmButtonName={confirmButtonName}
        label={label}>
        {children}
      </ConfirmationModal>
    ),
    warning: (
      <WarningModal
        onConfirmModal={onConfirmModal}
        confirmButtonName={confirmButtonName}
        label={label}>
        {children}
      </WarningModal>
    ),
    form: (
      <FormModal
        onConfirmModal={onConfirmModal}
        iconName={iconName}
        modalTitle={modalTitle}
        confirmButtonName={confirmButtonName}
        label={label}
      >
        {children}
      </FormModal>
    ),
  };

  return <Backdrop closeModal={closeModal}>{variantType[variant]}</Backdrop>;
};

export default Modal;
