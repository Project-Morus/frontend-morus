import { useState } from "react";
import { Input } from "../../../../components";
import { CardInformationProps } from "../../../Home/parts/types";
import { usePostInformation } from "../../controller/usePostInformation";

const PostForm = (data: CardInformationProps) => {
  const { register, errors } = usePostInformation();

  const [title, setTitle] = useState(data.data.titulo);
  const [description, setDescription] = useState(data.data.descricao);

  return (
    <form style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
      <Input
        maxWidth={1000}
        id={"titleInput"}
        label={"Título"}
        value={title}
        type="text"
        hasError={!!errors.titulo}
        errorText={errors.titulo?.message}
        {...register("titulo")}
      />
      <Input
        maxWidth={1000}
        id={"descriptionInput"}
        label={"Descrição"}
        value={description}
        type="text"
        hasError={!!errors.descricao}
        errorText={errors.descricao?.message}
        {...register("descricao")}
      />
    </form>
  );
};

export default PostForm;
