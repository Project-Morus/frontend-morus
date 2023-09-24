import Button from "../../../Button";
import { ButtonsContainerSC, ChildrenContainerSC, ConfirmationModalSC } from "../../styles";
import { IModalVariantsProps } from "../../types";

export const WarningModal = ({ children, onConfirmModal, buttonLabel = "Excluir", role }: IModalVariantsProps) => {
  return (
    <ConfirmationModalSC role={role}>
      <h2>Atenção!</h2>

      <ChildrenContainerSC>{children}</ChildrenContainerSC>

      <ButtonsContainerSC>
        <Button text={"Cancelar"} maxWidth={200} variant="secondary" />
        <Button text={buttonLabel} maxWidth={200} variant="red" onClick={onConfirmModal} />
      </ButtonsContainerSC>
    </ConfirmationModalSC>
  );
};
