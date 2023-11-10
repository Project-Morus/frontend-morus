import { useTheme } from "styled-components";
import { Icon } from "../../../../components";
import Status from "../Status";
import {
  ContainerSC,
  ContentSC,
  MainTextsSC,
  HeaderSC,
  CustomIconCard,
  CustomIconTrash,
  BoxHeaderSC,
  TitleSC,
  DateSC,
  DescriptionSC,
  AmountVotesSC,
  VoteTextSC,
  CustomIconEdit,
} from "./styles";
import { formatDate } from "../../../../helpers/date";
import { useDeleteVote } from "../../controller/useDeleteVote";
import { ModalDelete } from "../ModalDelete";
import { ModalPut } from "../ModalPut";

import { ICardProps } from "./interface";
import { usePutVotes } from "../../controller/usePutVotes";
import { useEffect } from "react";

const Card = (props: ICardProps) => {
  const theme = useTheme();
  const { id, title, description, status, expired_at, qtdVotosFavoraveis, qtdVotosContras, qtdVotosNulos } = props;

  const { handleDelete, isShowingDelete, deleteOpened, deleteClosed, isPending } = useDeleteVote(id);

  const {
    handleSubmit,
    errors,
    putOpened,
    putClosed,
    isShowingPut,
    isPending: isPendingEdit,
    register,
    reset,
  } = usePutVotes();

  useEffect(() => {
    const initialValues = {
      id,
      tema: title,
      descricao: description,
      dataExpiracao: expired_at,
      ativa: status,
    };

    reset(initialValues);
  }, [reset, id, title, description, status, expired_at]);

  return (
    <>
      <ContainerSC>
        <HeaderSC>
          <BoxHeaderSC>
            <MainTextsSC>
              <CustomIconCard variant="primary" icon="ph-gavel" />
              <TitleSC>{title}</TitleSC>
            </MainTextsSC>

            <Status openedVote={status} />
          </BoxHeaderSC>

          <div style={{ position: "absolute", top: "-10px", right: "0" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <CustomIconTrash name="ph-trash" onClick={deleteOpened} />
              <CustomIconEdit name="ph-pencil-simple-line" onClick={putOpened} />
            </div>
          </div>
        </HeaderSC>

        <ContentSC>
          <DateSC>{formatDate(expired_at)}</DateSC>
          <DescriptionSC>{description}</DescriptionSC>
        </ContentSC>

        <AmountVotesSC>
          <VoteTextSC>
            <Icon name="ph-check" size="20px" color={theme.colors.green[500]} />
            Aprovação: {qtdVotosFavoraveis}
          </VoteTextSC>

          <VoteTextSC>
            <Icon name="ph-x" size="20px" color={theme.colors.red[500]} />
            Reprovação: {qtdVotosContras}
          </VoteTextSC>

          <VoteTextSC>
            <Icon name="ph-minus" size="20px" color={theme.colors.grey[300]} />
            Nulos: {qtdVotosNulos}
          </VoteTextSC>
        </AmountVotesSC>
      </ContainerSC>

      <ModalDelete
        opened={isShowingDelete}
        onConfirmModal={handleDelete}
        closeModal={deleteClosed}
        isLoading={isPending}
      />

      <ModalPut
        onConfirmModal={handleSubmit}
        register={register}
        closeModal={putClosed}
        opened={isShowingPut}
        isLoading={isPendingEdit}
        errors={errors}
      />
    </>
  );
};

export default Card;
