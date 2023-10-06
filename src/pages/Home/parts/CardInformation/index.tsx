import InfoResident from "../../components/InfoResident";
import { CardInformationProps } from "../types";
import { CardSC, ContainerSC, ContentParagraphSC, ParagraphSC, TitleSC } from "./styles";

const CardInformation = ({ titulo, descricao }: CardInformationProps) => {
  return (
    <>
      <ContainerSC>
        <InfoResident />

        <CardSC>
          <TitleSC>{titulo}</TitleSC>
          <ContentParagraphSC>
            <ParagraphSC>{descricao}</ParagraphSC>
          </ContentParagraphSC>
        </CardSC>
      </ContainerSC>
    </>
  );
};

export default CardInformation;
