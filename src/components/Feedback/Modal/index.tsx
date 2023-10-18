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
  buttonLabel,
  open,
  isLoading,
}: IModalProps) => {
  const variantType: Record<VariantsTypes, ReactNode> = {
    confirmation: (
      <ConfirmationModal
        role="modal"
        onConfirmModal={onConfirmModal}
        confirmButtonName={confirmButtonName}
        buttonLabel={buttonLabel}
        closeModal={closeModal}
        isLoading={isLoading}
      >
        {children}
      </ConfirmationModal>
    ),
    warning: (
      <WarningModal
        role="modal"
        onConfirmModal={onConfirmModal}
        confirmButtonName={confirmButtonName}
        buttonLabel={buttonLabel}
        closeModal={closeModal}
        isLoading={isLoading}
      >
        {children}
      </WarningModal>
    ),
    form: (
      <FormModal
        role="modal"
        onConfirmModal={onConfirmModal}
        closeModal={closeModal}
        iconName={iconName}
        modalTitle={modalTitle}
        confirmButtonName={confirmButtonName}
        buttonLabel={buttonLabel}
        isLoading={isLoading}
      >
        {children}
      </FormModal>
    ),
  };

  return (
    <Backdrop role="backdrop" open={open}>
      {variantType[variant]}
    </Backdrop>
  );
};

export default Modal;
