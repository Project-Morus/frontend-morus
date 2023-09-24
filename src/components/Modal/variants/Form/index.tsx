import Button from "../../../Button";
import IconCard from "../../../IconCard";
import { ButtonsConainterSC, ChildrenContainerSC, FormModalSC, HeaderSC } from "../../styles";
import { IFormModalProps } from "../../types";

export const FormModal = ({
  children,
  onConfirmModal,
  iconName = "ph-activity",
  modalTitle,
  label = "Confirmar",
}: IFormModalProps) => {
  return (
    <FormModalSC>
      <HeaderSC>
        <IconCard variant="primary" icon={iconName} />
        <h1>{modalTitle}</h1>
      </HeaderSC>

      <ChildrenContainerSC>{children}</ChildrenContainerSC>

      <ButtonsConainterSC>
        <Button text={"Cancelar"} maxWidth={200} variant="secondary" />
        <Button text={label} maxWidth={200} variant="primary" onClick={onConfirmModal} />
      </ButtonsConainterSC>
    </FormModalSC>
  );
};
