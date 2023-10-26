import { Input, Modal } from "../../../../components";
import { usePostInformation } from "../../controller";

type FormTypes = {
  opened: boolean;
  handleModalClosed: () => void;
};

const Form = ({ opened, handleModalClosed }: FormTypes) => {
  const { handleSubmit, register, errors, isPending } = usePostInformation({ handleModalClosed });

  return (
    <Modal
      variant="form"
      modalTitle="Cadastrar Informação"
      open={opened}
      closeModal={handleModalClosed}
      onConfirmModal={handleSubmit}
      isLoading={isPending}
      iconName="ph-newspaper"
    >
      <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
        <Input
          id="titulo"
          label="Título"
          type="text"
          hasError={!!errors.titulo}
          errorText={errors.titulo?.message}
          {...register("titulo")}
        />
        <Input
          id="descricao"
          label="Descrição"
          type="text"
          hasError={!!errors.descricao}
          errorText={errors.descricao?.message}
          {...register("descricao")}
        />
      </div>
    </Modal>
  );
};

export default Form;
