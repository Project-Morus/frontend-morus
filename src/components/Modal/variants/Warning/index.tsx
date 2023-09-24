import Button from "../../../Button";
import { ButtonsConainterSC, ChildrenContainerSC, ConfirmationModalSC } from "../../styles";
import { IModalVariantsProps } from "../../types";

export const WarningModal = ({ children, onConfirmModal, label = 'Excluir' }: IModalVariantsProps) => {
  return (
    <ConfirmationModalSC>
      <h2>Atenção!</h2>

      <ChildrenContainerSC>{children}</ChildrenContainerSC>

      <ButtonsConainterSC>
        <Button text={"Cancelar"} maxWidth={200} variant="secondary" />
        <Button text={label} maxWidth={200} variant="red" onClick={onConfirmModal} />
      </ButtonsConainterSC>
    </ConfirmationModalSC>
  );
};
