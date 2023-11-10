import { Input, Modal } from "../../../../components";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "../../controller/usePutVotes";
import { Checkbox, Label } from "./styles";

interface IModalPutProps {
  opened: boolean;
  closeModal: () => void;
  onConfirmModal: () => void;
  isLoading: boolean;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export function ModalPut({
  register,
  errors,
  opened,
  closeModal,
  onConfirmModal,
  isLoading,
}: IModalPutProps) {
  return (
    <Modal
      variant="form"
      open={opened}
      closeModal={closeModal}
      onConfirmModal={onConfirmModal}
      isLoading={isLoading}
      modalTitle="Atualizar a votação"
      iconName="ph-gavel"
    >
      <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Input
            id="tema"
            label="Tema"
            type="text"
            hasError={!!errors.tema}
            errorText={errors.tema?.message}
            {...register("tema")}
          />

          <Input
            id="dataExpiracao"
            label="Data de expiração"
            type="datetime-local"
            hasError={!!errors.dataExpiracao}
            errorText={errors.dataExpiracao?.message}
            {...register("dataExpiracao")}
          />
        </div>

        <Input
          id="descricao"
          label="Descrição"
          type="text"
          hasError={!!errors.descricao}
          errorText={errors.descricao?.message}
          {...register("descricao")}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <Label htmlFor="isActive">A votação ainda continua?</Label>
          <Checkbox type="checkbox" {...register("ativo")} id="isActive" />
        </div>
      </div>
    </Modal>
  );
}
