import LogoHorizontalWhiteSVG from "../../assets/svg/LogoHorizontalWhite";
import InformationCard from "./components/InformationCard";
import {
  HeroSectionSC,
  NavButtonSC,
  NavButtonContainerSC,
  NavigationHeaderSC,
  LoginButtonSC,
  StartNowButtonSC,
  HeroSectionTitleSC,
  HeroSectionTitleContainerSC,
  InformationSectionSC,
  BlueTitleSC,
  CardsRowSC,
} from "./styles";

const LandingPage = () => {
  return (
    <>
      <HeroSectionSC>
        <NavigationHeaderSC>
          <LogoHorizontalWhiteSVG width={200} />
          <NavButtonContainerSC id="inicio">
            <NavButtonSC href="#inicio">Início</NavButtonSC>
            <NavButtonSC href="#sobre">Sobre</NavButtonSC>
            <NavButtonSC href="#plataforma">A Plataforma</NavButtonSC>
            <NavButtonSC href="#contatos">Contatos</NavButtonSC>
            <LoginButtonSC>Login</LoginButtonSC>
          </NavButtonContainerSC>
        </NavigationHeaderSC>
        <HeroSectionTitleContainerSC>
          <HeroSectionTitleSC>O Futuro da Gestão de Condomínios Começa Aqui</HeroSectionTitleSC>
          <StartNowButtonSC>Comece agora</StartNowButtonSC>
        </HeroSectionTitleContainerSC>
      </HeroSectionSC>

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
    </>
  );
};

export default LandingPage;
