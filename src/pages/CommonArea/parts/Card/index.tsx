import { useTheme } from "styled-components";
import { Button, Icon, Modal } from "../../../../components";
import { TitleSC } from "../../../styles";
import { CardSC, RowSC } from "./styles";
import { CardProps } from "./types";
import { useDeleteCommonArea } from "../../controller";
import { useState } from "react";

const Card = ({ title, peopleLimit, idCard, scheduleNumber, url }: CardProps) => {
  const theme = useTheme();
  const { handleDelete, isShowingDelete, deleteOpened, deleteClosed, isPending } = useDeleteCommonArea();
  const [id, setId] = useState<number>(0);

  const initiateDeletionProcess = (idCard: number) => {
    setId(idCard);

    deleteOpened();
  };

  return (
    <>
      <CardSC>
        <RowSC>
          <TitleSC to={url}>{title}</TitleSC>
          <Icon name="ph-trash" color={theme.colors.red[500]} onClick={() => initiateDeletionProcess(idCard)} />
        </RowSC>
        <RowSC>
          <RowSC>
            <Icon name="ph-users" />
            <p>{peopleLimit}</p>
            <Icon name="ph-calendar" color={theme.colors.primary[500]} />
            <p>{`${scheduleNumber}`}</p>
          </RowSC>
        </RowSC>
      </CardSC>

      <Modal
        variant="warning"
        open={isShowingDelete}
        closeModal={deleteClosed}
        onConfirmModal={() => handleDelete(id)}
        isLoading={isPending}
      >
        Tem certeza que deseja excluir a área comum "{title}" do condomínio Ilha de Capri? Esta ação não poderá ser
        desfeita.
      </Modal>
    </>
  );
};

export default Card;
