import { useTheme } from "styled-components";
import { Icon } from "../../../../components";
import Status from "../Status";
import { ContainerSC, ContentSC, MainTextsSC, HeaderSC, CustomIconCard, CustomIconTrash, BoxHeaderSC, TitleSC, DateSC, DescriptionSC, AmountVotesSC, VoteTextSC } from "./styles";

const Card = () => {
  const theme = useTheme()
  return (
    <ContainerSC>
      <HeaderSC>
        <BoxHeaderSC>
          <MainTextsSC>
            <CustomIconCard variant="primary" icon='ph-gavel' />
            <TitleSC>Implementação de Medidas Sustentáveis no Condomínio</TitleSC>
          </MainTextsSC>

          <Status openedVote />
        </BoxHeaderSC>

        <CustomIconTrash name="ph-trash" />
      </HeaderSC>

      <ContentSC>
        <DateSC>01/11/2023</DateSC>
        <DescriptionSC>
          O tema de votação em questão diz respeito à possibilidade de implementar medidas sustentáveis no nosso condomínio, com o objetivo de promover práticas mais ecológicas e conscientes em nosso ambiente residencial. A sustentabilidade é uma preocupação global crescente, e é importante que também façamos a nossa parte para minimizar o impacto ambiental de nosso condomínio.
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
  );
}

export default Card;