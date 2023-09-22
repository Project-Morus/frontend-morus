import InfoResident from "../../components/InfoResident";
import { CardSC, ContainerSC, ContentParagraphSC, ParagraphSC, TitleSC } from "./styles";

const CardInformation = () => {
  return (
    <ContainerSC>
      <InfoResident />

      <CardSC>
        <TitleSC>Reforma do Salão de Festas</TitleSC>
        <ContentParagraphSC>
          <ParagraphSC>Prezados Moradores,</ParagraphSC>
          <ParagraphSC>Informamos que o salão de festas passará por reformas a partir de 27/12/2023. Durante esse período, o acesso ao salão estará temporariamente suspenso. As melhorias visam aprimorar o espaço para melhor atender às suas necessidades. Agradecemos a compreensão.</ParagraphSC>
          <ParagraphSC>Atenciosamente, </ParagraphSC>
          <ParagraphSC>A Administração </ParagraphSC>
        </ContentParagraphSC>
      </CardSC>
    </ContainerSC>
  );
}

export default CardInformation;