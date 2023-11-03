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
  VoteTextSC } from "./styles";
import { formatDate } from "../../../../helpers/date";
import { useDeleteVote } from "../../controller/useDeleteVote";
import { ModalDelete } from "../ModalDelete";

  interface ICardProps {
    id: number,
    title: string,
    description: string,
    expired_at: string,
    status: boolean,
  }

const Card = ({id, title, description, status, expired_at}: ICardProps) => {
  const theme = useTheme()
  const {handleDelete, isShowingDelete, deleteOpened, deleteClosed, isPending } = useDeleteVote(id);

  return (
    <>
      <ContainerSC>
        <HeaderSC>
          <BoxHeaderSC>
            <MainTextsSC>
              <CustomIconCard variant="primary" icon='ph-gavel' />
              <TitleSC>{title}</TitleSC>
            </MainTextsSC>

            <Status openedVote={status} />
          </BoxHeaderSC>

          <CustomIconTrash name="ph-trash" onClick={() => deleteOpened()}/>
        </HeaderSC>

        <ContentSC>
          <DateSC>{formatDate(expired_at)}</DateSC>
          <DescriptionSC>
            {description}
          </DescriptionSC>
        </ContentSC>

        <AmountVotesSC>
          <VoteTextSC>
            <Icon name="ph-check" size='20px' color={theme.colors.green[500]} />
            Aprovação: 65
          </VoteTextSC>

          <VoteTextSC>
            <Icon name="ph-x" size='20px' color={theme.colors.red[500]} />
            Reprovação: 30
          </VoteTextSC>

          <VoteTextSC>
            <Icon name="ph-minus" size='20px' color={theme.colors.grey[300]} />
            Nulos: 15
          </VoteTextSC>
        </AmountVotesSC>
      </ContainerSC>

      <ModalDelete 
        opened={isShowingDelete} 
        onConfirmModal={handleDelete} 
        closeModal={deleteClosed}
        isLoading={isPending}
      />
    </>
    
  );
}

export default Card;