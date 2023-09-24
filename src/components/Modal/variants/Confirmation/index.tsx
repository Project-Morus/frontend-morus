import Button from "../../../Button";
import { ChildrenContainerSC, ButtonsConainterSC, ConfirmationModalSC } from "../../styles";
import { IModalVariantsProps } from "../../types";

export const ConfirmationModal = ({ children, onConfirmModal, label = 'Confirmar' }: IModalVariantsProps) => {
  return (
    <ConfirmationModalSC>
      <h2>Atenção!</h2>

      <ChildrenContainerSC>{children}</ChildrenContainerSC>

      <ButtonsConainterSC>
        <Button text={"Cancelar"} maxWidth={200} variant="secondary" />
        <Button text={label} maxWidth={200} variant="green" onClick={onConfirmModal} />
      </ButtonsConainterSC>
    </ConfirmationModalSC>
  );
};

