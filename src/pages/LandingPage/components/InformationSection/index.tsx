import { BlueTitleSC } from "../../styles";
import { InformationCard } from "./components/InformationCard";
import {
  InformationSectionSC,
  CardsRowSC,
} from "./styles";

export const InformationSection = () => {
  return (
    <InformationSectionSC id="sobre">
      <BlueTitleSC>Tenha todas as informações em um só lugar</BlueTitleSC>

      <CardsRowSC>
        <InformationCard
          title={"Arquivos"}
          label={
            "Consulte todos os pagamentos dos moradores, registre no livro caixa do condomínio, aplique multas, etc."
          }
          iconName={"ph-files"}
        />
        <InformationCard
          title={"Finanças"}
          label={
            "Consulte todos os pagamentos dos moradores, registre no livro caixa do condomínio, aplique multas, etc."
          }
          iconName={"ph-money"}
        />
        <InformationCard
          title={"Assembleias"}
          label={"Realize votações nas deliberações de forma totalmente digital"}
          iconName={"ph-gavel"}
        />
      </CardsRowSC>
    </InformationSectionSC>
  );
}