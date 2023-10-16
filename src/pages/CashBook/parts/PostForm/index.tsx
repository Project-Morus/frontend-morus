import { Button, Input } from "../../../../components";
import { usePostCashBook } from "../../controller/usePostInformation";
import { ModalButtonContainerSC } from "../../styles";

const PostForm = () => {
  const { register, errors } = usePostCashBook();

  return (
    <form style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
      <Input
        id={"valor"}
        label={"Valor"}
        type="text"
        hasError={!!errors.descricao}
        errorText={errors.descricao?.message}
        {...register("valor")}
      />
      <Input
        id={"categoria"}
        label={"Categoria"}
        type="text"
        hasError={!!errors.descricao}
        errorText={errors.descricao?.message}
        {...register("categoria")}
      />

      <ModalButtonContainerSC>
        <Button text="Entrada" variant="green" />
        <Button text="Saída" variant="red" />
      </ModalButtonContainerSC>

      <Input
        id={"torre"}
        label={"Torre"}
        type="text"
        hasError={!!errors.descricao}
        errorText={errors.descricao?.message}
        {...register("torre")}
      />
      <Input
        id={"descricao"}
        label={"Descrição"}
        type="text"
        hasError={!!errors.descricao}
        errorText={errors.descricao?.message}
        {...register("descricao")}
      />
    </form>
  );
};

export default PostForm;
