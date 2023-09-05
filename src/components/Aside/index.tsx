import { ContainerSC, ContentSC, FooterSC } from "./styles";
import logoMorusWhite from '../../assets/svg/LogoWhite.svg'
import { IAsideProps } from "./types";

const Aside = ({ position = 'right', ...props }: IAsideProps) => {

  return (
    <ContainerSC $position={position}>
      <ContentSC $position={position}>
        <img src={logoMorusWhite} />
      </ContentSC>

      {props.children}

      <FooterSC $position={position}>Todos os direitos reservados Morus Company 2023 | Versão 1.0.0</FooterSC>
    </ContainerSC>
  );
}

export default Aside;