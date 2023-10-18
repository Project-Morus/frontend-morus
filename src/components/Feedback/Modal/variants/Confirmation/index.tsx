import { Button } from "../../../../";
import { ChildrenContainerSC, ButtonsContainerSC, ConfirmationModalSC, TitleSC } from "../../styles";
import { IModalVariantsProps } from "../../types";

export const ConfirmationModal = ({
  children,
  onConfirmModal,
  closeModal,
  buttonLabel = "Confirmar",
  role,
  isLoading,
}: IModalVariantsProps) => {
  return (
    <ConfirmationModalSC role={role}>
      <TitleSC>Atenção!</TitleSC>

      <ChildrenContainerSC>{children}</ChildrenContainerSC>

      <ButtonsContainerSC>
        <Button text={"Cancelar"} maxWidth={200} variant="secondary" onClick={closeModal} />
        <Button text={buttonLabel} maxWidth={200} variant="green" onClick={onConfirmModal} isLoading={isLoading} />
      </ButtonsContainerSC>
    </ConfirmationModalSC>
  );
};
