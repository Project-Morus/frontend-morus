import { IconAndTitleModalSC } from "../../styles";
import { IModalVariantsProps } from "../../types";

const IconAndTitleModal = ({ children, onConfirmModal }: IModalVariantsProps) => {
  return <IconAndTitleModalSC>{children}</IconAndTitleModalSC>;
};

export default IconAndTitleModal;
