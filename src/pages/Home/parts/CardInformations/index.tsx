import InfoResident from "../../components/InfoResident";
import { CardInformationProps } from "../types";
import { CardSC, TitleSC, ParagraphSC, InformationSC } from "./styles";

const CardInformations = ({ titulo, descricao }: CardInformationProps) => {
  return (
    <CardSC>
      <InfoResident />

      <InformationSC>
        <TitleSC>{titulo}</TitleSC>
        <ParagraphSC>{descricao}</ParagraphSC>
      </InformationSC>
    </CardSC>
  );
};

export default CardInformations;
