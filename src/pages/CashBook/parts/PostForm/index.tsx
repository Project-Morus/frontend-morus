import { Input, Modal } from "../../../../components";
import { usePostCashBook } from "../../controller";

type FormTypes = {
  opened: boolean;
  handleModalClosed: () => void;
};

const PostForm = ({ opened, handleModalClosed }: FormTypes) => {
  const { handleSubmit, register, errors, isPending } = usePostCashBook({
    handleModalClosed,
  });

  return (
    <Modal
      variant="form"
      modalTitle="Cadastrar transação"
      open={opened}
      closeModal={handleModalClosed}
      onConfirmModal={handleSubmit}
      isLoading={isPending}
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

        <Input
          id="dataTransacao"
          label="Data da transação"
          type="datetime-local"
          hasError={!!errors.dataTransacao}
          errorText={errors.dataTransacao?.message}
          {...register("dataTransacao")}
        />
      </div>
    </Modal>
  );
};

export default PostForm;
