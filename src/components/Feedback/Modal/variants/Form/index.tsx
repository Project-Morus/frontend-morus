import {Button, IconCard} from "../../../../";
import { ButtonsContainerSC, ChildrenContainerSC, FormModalSC, HeaderSC, TitleSC } from "../../styles";
import { IFormModalProps } from "../../types";

export const FormModal = ({
  children,
  onConfirmModal,
  iconName = "ph-activity",
  modalTitle,
  buttonLabel = "Confirmar",
  role,
}: IFormModalProps) => {
  return (
    <FormModalSC role={role}>
      <HeaderSC>
        <IconCard variant="primary" icon={iconName} />
        <TitleSC>{modalTitle}</TitleSC>
      </HeaderSC>

      <ChildrenContainerSC>{children}</ChildrenContainerSC>

      <ButtonsContainerSC>
        <Button text={"Cancelar"} maxWidth={200} variant="secondary" />
        <Button text={buttonLabel} maxWidth={200} variant="primary" onClick={onConfirmModal} />
      </ButtonsContainerSC>
    </FormModalSC>
  );
};
