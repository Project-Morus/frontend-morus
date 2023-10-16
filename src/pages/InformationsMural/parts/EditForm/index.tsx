import { useState } from "react";
import { Input } from "../../../../components";
import { httpClient } from "../../../../services/httpClient";
import { CardInformationProps } from "../../../Home/parts/types";
import { usePostInformation } from "../../controller/usePostInformation";

const EditForm = (data: CardInformationProps) => {
  const { register, errors } = usePostInformation();

  const [title, setTitle] = useState(data.data.titulo);
  const [description, setDescription] = useState(data.data.descricao);

  const handleConfirmEditInfo = () => {
    async function fetchData() {
      try {
        console.log("entrou no try");
        await httpClient.put("api/AtualizarInformacao", {
          id: data.data.id,
          titulo: title,
          descricao: description,
          ativo: data.data.ativo,
          dataCadastro: data.data.dataCadastro,
          dataAlteracao: data.data.dataAlteracao,
        });
      } catch (error) {
        console.log("entrou no catch");
        console.error("Erro ao editar Informação:", error);
      }
    }

    fetchData();
  };

  return (
    <form style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
      <Input
        maxWidth={1000}
        id={"titulo"}
        label={"Título"}
        value={title}
        type="text"
        hasError={!!errors.titulo}
        errorText={errors.titulo?.message}
        {...register("titulo")}
      />
      <Input
        maxWidth={1000}
        id={"descricao"}
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

export default EditForm;
