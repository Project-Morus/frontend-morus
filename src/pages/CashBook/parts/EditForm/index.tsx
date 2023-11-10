import { Input, Modal } from "../../../../components";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "../../controller";

type FormTypes = {
  opened: boolean;
  closeModal: () => void;
  onConfirmModal: () => void;
  isLoading: boolean;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

const EditForm = ({
  opened,
  closeModal,
  onConfirmModal,
  errors,
  isLoading,
  register,
}: FormTypes) => {
  return (
    <Modal
      variant="form"
      modalTitle="Cadastrar transação"
      open={opened}
      closeModal={closeModal}
      onConfirmModal={onConfirmModal}
      isLoading={isLoading}
      iconName="ph-money"
    >
      <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
        <Input
          id="valorTransacao"
          label={"Valor"}
          type="number"
          min={1}
          hasError={!!errors.valorTransacao}
          errorText={errors.valorTransacao?.message}
          {...register("valorTransacao", { valueAsNumber: true })}
        />

        <Input
          id="dataTransacao"
          label="Data da transação"
          type="datetime-local"
          hasError={!!errors.dataTransacao}
          errorText={errors.dataTransacao?.message}
          {...register("dataTransacao")}
        />

        <Input
          id={"categoria"}
          label={"Categoria"}
          type="text"
          hasError={!!errors.descricaoTransacao}
          errorText={errors.descricaoTransacao?.message}
          {...register("categoria")}
        />

        <Input
          id={"torre"}
          label={"Torre"}
          type="text"
          hasError={!!errors.descricaoTransacao}
          errorText={errors.descricaoTransacao?.message}
          {...register("torre")}
        />

        <Input
          id={"descricao"}
          label={"Descrição"}
          type="text"
          hasError={!!errors.descricaoTransacao}
          errorText={errors.descricaoTransacao?.message}
          {...register("descricaoTransacao")}
        />
      </div>
    </Modal>
  );
};

export default EditForm;
