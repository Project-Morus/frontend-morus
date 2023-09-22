import InfoResident from "../../components/InfoResident";
import { ContainerSC, CardSC, TitleSC, ParagraphSC, InformationSC } from "./styles";

const CardInformations = () => {
  return (
    <ContainerSC>
      <CardSC>
        <InfoResident />

        <InformationSC>
          <TitleSC>Reforma do Salão de Festas</TitleSC>
          <ParagraphSC>Prezados Moradores,
            Informamos que o salão de festas passará por reformas a partir de...</ParagraphSC>
        </InformationSC>
      </CardSC>

      <CardSC>
        <InfoResident />

        <InformationSC>
          <TitleSC>Reforma do Salão de Festas</TitleSC>
          <ParagraphSC>Prezados Moradores,
            Informamos que o salão de festas passará por reformas a partir de...</ParagraphSC>
        </InformationSC>
      </CardSC>

      <CardSC>
        <InfoResident />

        <InformationSC>
          <TitleSC>Reforma do Salão de Festas</TitleSC>
          <ParagraphSC>Prezados Moradores,
            Informamos que o salão de festas passará por reformas a partir de...</ParagraphSC>
        </InformationSC>
      </CardSC>
    </ContainerSC>
  );
}

export default CardInformations;