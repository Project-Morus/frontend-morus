import { ContainerSC, ContentSC, FooterSC } from "./styles";
import { IAsideProps } from "./types";
import LogoWhiteSvg from "../../../assets/svg/LogoWhite";

const Aside = ({ position = 'right', ...props }: IAsideProps) => {
  return (
    <ContainerSC $position={position} role={props.role}>
      <ContentSC $position={position}>
        <LogoWhiteSvg />
      </ContentSC>

      {props.children}

      <FooterSC $position={position}>Todos os direitos reservados Morus Company 2023 | Versão 1.0.0</FooterSC>
    </ContainerSC>
  );
}

export default Aside;