import ReactDOM from "react-dom";
import { IBackdropProps } from "../types";
import { BackdropSC } from "../stylesUtils";

const Backdrop = ({ children, closeModal, role, open }: IBackdropProps) => {
  return (
    open &&
    ReactDOM.createPortal(
      <BackdropSC role={role}>{children}</BackdropSC>,
      document.getElementById("portal") as HTMLElement
    )
  );
};

export default Backdrop;
