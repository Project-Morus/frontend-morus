import { useState } from "react";
import { Icon, Modal } from "../../../../components";
import { InputContainerSC } from "./styles";
import { CardInformationProps } from "../../../Home/parts/types";
import PostForm from "../PostForm";
import { useDeleteInformation } from "../../controller/useDeleteInformation";

export const IconsSC = (data: CardInformationProps) => {
  const { handleDelete, deleteOpened, isShowingDelete, deleteClosed, isPending } = useDeleteInformation();

  const [id, setId] = useState<number>(0);

  const initiateDeletionProcess = (idOccurence: number) => {
    setId(idOccurence);

    deleteOpened();
  };

  return (
    <div key={data.id}>
      <div style={{ display: "flex", gap: "0.8rem" }}>
        <Icon name="ph-pencil-simple-line" size="20" onClick={() => {}} />
        <Icon name="ph-trash" color="#CE323B" size="20" onClick={() => initiateDeletionProcess(data.data.id)} />
      </div>

      <Modal
        open={isShowingDelete}
        isLoading={isPending}
        closeModal={deleteClosed}
        variant="warning"
        onConfirmModal={() => handleDelete(id)}
      >
        <p>
          Tem certeza que deseja excluir a informação "{data.data.titulo}" do condôminio Ilha de Capri? Esta ação não
          poderá ser desfeita.
        </p>
      </Modal>

      <Modal
        open={false}
        closeModal={() => {}}
        variant="form"
        iconName="ph-newspaper"
        modalTitle="Editar Informação"
        buttonLabel="Confirmar Edição"
        onConfirmModal={() => console.log("Algo aqui")}
      >
        <InputContainerSC>
          <PostForm />
        </InputContainerSC>
      </Modal>
    </div>
  );
};
