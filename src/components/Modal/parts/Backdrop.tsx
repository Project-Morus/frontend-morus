import ReactDOM from "react-dom";
import { IBackdropProps } from "../types";
import { BackdropSC } from "../styles";

const Backdrop = ({ children, closeModal }: IBackdropProps) => {
  return ReactDOM.createPortal(
    <BackdropSC onClick={closeModal}>{children}</BackdropSC>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Backdrop;
