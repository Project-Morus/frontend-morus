import LogoHorizontalWhiteSVG from "../../../../assets/svg/LogoHorizontalWhite";
import {
  ContainerSC,
  NavButtonSC,
  NavButtonContainerSC,
  NavigationHeaderSC,
  LoginButtonSC,
  StartNowButtonSC,
  HeroSectionTitleSC,
  HeroSectionTitleContainerSC,
} from "./styles";

export const HeroSection = () => {
  return (
    <ContainerSC>
      <NavigationHeaderSC>
        <LogoHorizontalWhiteSVG width={200} />
        <NavButtonContainerSC id="inicio">
          <NavButtonSC href="#inicio">Início</NavButtonSC>
          <NavButtonSC href="#sobre">Sobre</NavButtonSC>
          <NavButtonSC href="#plataforma">A Plataforma</NavButtonSC>
          <NavButtonSC href="#contatos">Contatos</NavButtonSC>
          <LoginButtonSC to="login">Login</LoginButtonSC>
        </NavButtonContainerSC>
      </NavigationHeaderSC>
      <HeroSectionTitleContainerSC>
        <HeroSectionTitleSC>O Futuro da Gestão de Condomínios Começa Aqui</HeroSectionTitleSC>
        <StartNowButtonSC>Comece agora</StartNowButtonSC>
      </HeroSectionTitleContainerSC>
    </ContainerSC>
  );
}