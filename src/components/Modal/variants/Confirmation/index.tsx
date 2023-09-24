import Button from "../../../Button";
import { ChildrenContainerSC, ButtonsContainerSC, ConfirmationModalSC } from "../../styles";
import { IModalVariantsProps } from "../../types";

export const ConfirmationModal = ({
  children,
  onConfirmModal,
  buttonLabel = "Confirmar",
  role,
}: IModalVariantsProps) => {
  return (
    <ConfirmationModalSC role={role}>
      <h2>Atenção!</h2>

      <ChildrenContainerSC>{children}</ChildrenContainerSC>

      <ButtonsContainerSC>
        <Button text={"Cancelar"} maxWidth={200} variant="secondary" />
        <Button text={buttonLabel} maxWidth={200} variant="green" onClick={onConfirmModal} />
      </ButtonsContainerSC>
    </ConfirmationModalSC>
  );
};
