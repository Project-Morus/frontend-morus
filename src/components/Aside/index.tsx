import { ContainerSC, ContentSC, FooterSC } from "./styles";
import logoMorusWhite from '../../assets/svg/LogoWhite.svg'
import { IAsideProps } from "./types";

const Aside = ({ position = 'right', ...props }: IAsideProps) => {

  return (
    <ContainerSC $position={position}>
      <ContentSC $position={position}>
        <img
          width={500}
          height={500}
          src={logoMorusWhite}
          alt="Uma imagem da logo Morus representada por 4 torres de tamanhos diferentes sendo um alto, dois médios e um pequeno e escrito logo abaixo: Morus Condomínios"
          loading="lazy"
        />
      </ContentSC>

      {props.children}

      <FooterSC $position={position}>Todos os direitos reservados Morus Company 2023 | Versão 1.0.0</FooterSC>
    </ContainerSC>
  );
}

export default Aside;