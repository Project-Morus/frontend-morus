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
  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ContainerSC>
      <NavigationHeaderSC>
        <LogoHorizontalWhiteSVG width={200} />
        <NavButtonContainerSC id="inicio">
          <NavButtonSC onClick={() => handleSmoothScroll("inicio")}>Início</NavButtonSC>
          <NavButtonSC onClick={() => handleSmoothScroll("sobre")}>Sobre</NavButtonSC>
          <NavButtonSC onClick={() => handleSmoothScroll("plataforma")}>A Plataforma</NavButtonSC>
          <NavButtonSC onClick={() => handleSmoothScroll("contatos")}>Contatos</NavButtonSC>
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