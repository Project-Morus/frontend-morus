import { Button, IconCard } from "../../../../";
import { ButtonsContainerSC, ChildrenContainerSC, FormModalSC, HeaderSC, TitleSC } from "../../styles";
import { IFormModalProps } from "../../types";

export const FormModal = ({
  children,
  onConfirmModal,
  iconName = "ph-activity",
  modalTitle,
  buttonLabel = "Confirmar",
  role,
  closeModal,
  isLoading,

}: IFormModalProps) => {
  return (
    <FormModalSC onSubmit={onConfirmModal} role={role}>
      <HeaderSC>
        <IconCard variant="primary" icon={iconName} />
        <TitleSC>{modalTitle}</TitleSC>
      </HeaderSC>

      <ChildrenContainerSC>
        {children}
      </ChildrenContainerSC>

      <ButtonsContainerSC>
        <Button text={"Cancelar"} maxWidth={200} variant="secondary" onClick={closeModal} />
        <Button type="submit" text={buttonLabel} maxWidth={200} variant="primary" isLoading={isLoading} />
      </ButtonsContainerSC>
    </FormModalSC>
  );
};
