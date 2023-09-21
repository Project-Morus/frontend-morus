import Backdrop from "./parts/Backdrop";
import { ModalSC } from "./styles";
import { IModalProps } from "./types";

const Modal = ({ children, closeModal }: IModalProps) => {
  return (
    <Backdrop closeModal={closeModal}>
      <ModalSC onClick={(e) => e.stopPropagation()}>{children}</ModalSC>
    </Backdrop>
  );
};

export default Modal;
