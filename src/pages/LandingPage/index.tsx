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
  CommonAreaSectionSC,
  CommonAreaSVGContainer,
  CommonAreaTitleSC,
  MuralSectionSC,
  MuralImageContainerSC,
  CustomersSectionSC,
  CustomersRowSC,
  CustomerNameSC,
  CustomerCardContainerSC,
  CustomerImageSC,
  FooterSectionSC,
  RightSideSC,
  LeftSideSC,
  FooterTextContainerSC,
  CopyrightTextSC,
} from "./styles";
import CommonAreaScreenSVG from "../../assets/svg/CommonAreaScreen";

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
            <LoginButtonSC to="login">Login</LoginButtonSC>
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

      <CommonAreaSectionSC>
        <CommonAreaSVGContainer>
          <CommonAreaScreenSVG />
        </CommonAreaSVGContainer>
        <CommonAreaTitleSC>Agende as áreas comuns através da plataforma</CommonAreaTitleSC>
      </CommonAreaSectionSC>

      <MuralSectionSC>
        <BlueTitleSC>Mantenha os moradores sempre informados</BlueTitleSC>
        <MuralImageContainerSC />
      </MuralSectionSC>

      <CustomersSectionSC>
        <BlueTitleSC>Alguns de nossos clientes</BlueTitleSC>
        <CustomersRowSC>
          <CustomerCardContainerSC>
            <CustomerImageSC src="src/assets/png/customer1.png" alt="Condomínio Sol Nascente" />
            <CustomerNameSC>Sol Nascente</CustomerNameSC>
          </CustomerCardContainerSC>

          <CustomerCardContainerSC>
            <CustomerImageSC src="src/assets/png/customer2.png" alt="Condomínio Praia Serena" />
            <CustomerNameSC>Praia Serena</CustomerNameSC>
          </CustomerCardContainerSC>

          <CustomerCardContainerSC>
            <CustomerImageSC src="src/assets/png/customer3.png" alt="Condomínio Vista Jardim" />
            <CustomerNameSC>Vista Jardim</CustomerNameSC>
          </CustomerCardContainerSC>

          <CustomerCardContainerSC>
            <CustomerImageSC src="src/assets/png/customer4.png" alt="Condomínio Lagoa Azul Residence" />
            <CustomerNameSC>Lagoa Azul Residence</CustomerNameSC>
          </CustomerCardContainerSC>
        </CustomersRowSC>
      </CustomersSectionSC>

      <FooterSectionSC>
        <FooterTextContainerSC>
          <LeftSideSC>
            <div>
              <p>Endereço:</p>
              <p>Rua das Flores, nº 130, Bairro Primavera, Cidade Imaginária, Estado dos Sonhos, CEP: 12345-678</p>
            </div>
            <div>
              <p>Horário de funcionamento:</p>
              <p>Rua das Flores, nº 130, Bairro Primavera, Cidade Imaginária, Estado dos Sonhos, CEP: 12345-678</p>
            </div>
          </LeftSideSC>
          <RightSideSC>
            <p>Contatos:</p>
            <p>WhatsApp: (11) 98765-4321</p>
            <p>Telefone: (11) 1234-5678</p>
          </RightSideSC>
        </FooterTextContainerSC>
        <CopyrightTextSC>Copyright © 2023 Morus - Todos os direitos reservados</CopyrightTextSC>
      </FooterSectionSC>
    </>
  );
};

export default LandingPage;
