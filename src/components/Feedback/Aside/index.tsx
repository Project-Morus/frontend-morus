import { ContainerSC, ContentSC } from "./styles";
import { IAsideProps } from "./types";
import LogoWhiteSvg from "../../../assets/svg/LogoWhite";

const Aside = ({ position = 'right', ...props }: IAsideProps) => {
  return (
    <ContainerSC $position={position} role={props.role}>
      <ContentSC $position={position}>
        <LogoWhiteSvg />
      </ContentSC>

      {props.children}
    </ContainerSC>
  );
}

export default Aside;