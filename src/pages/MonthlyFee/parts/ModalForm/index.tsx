import { Input, Modal } from "../../../../components";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Checkbox, Label } from "./styles";
import { FormData } from "../../controller/usePostMonthlyFee";

interface IModalPostProps {
  opened: boolean;
  closeModal: () => void;
  onConfirmModal: () => void;
  isLoading: boolean;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const Form = ({
  opened,
  closeModal,
  onConfirmModal,
  isLoading,
  register,
  errors,
}: IModalPostProps) => {
  return (
    <Modal
      variant="form"
      modalTitle="Registrar Taxa Mensal"
      open={opened}
      closeModal={closeModal}
      onConfirmModal={onConfirmModal}
      isLoading={isLoading}
      iconName="ph-handcoins"
    >
      <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Input
            id="nome"
            label="Nome"
            type="text"
            hasError={!!errors.nome}
            errorText={errors.nome?.message}
            {...register("nome")}
          />
          <Input
            id="valor"
            label="Valor"
            type="number"
            hasError={!!errors.valor}
            errorText={errors.valor?.message}
            {...register("valor")}
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

        <Input
          id="dataFim"
          label="Vencimento"
          type="datetime-local"
          hasError={!!errors.dataFim}
          errorText={errors.dataFim?.message}
          {...register("dataFim")}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <Label htmlFor="isRecorrent">É recorrente?</Label>
          <Checkbox
            type="checkbox"
            {...register("recorrent")}
            id="isRecorrent"
          />
        </div>
      </div>
    </Modal>
  );
};

export default Form;
