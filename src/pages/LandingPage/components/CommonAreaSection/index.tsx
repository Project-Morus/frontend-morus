
import CommonAreaScreenSVG from "../../../../assets/svg/CommonAreaScreen";
import { CommonAreaSVGContainer, CommonAreaSectionSC, CommonAreaTitleSC } from "./styles";

export const CommonAreaSection = () => {
  return (
    <CommonAreaSectionSC id="plataforma">
      <CommonAreaSVGContainer>
        <CommonAreaScreenSVG />
      </CommonAreaSVGContainer>
      <CommonAreaTitleSC>
        Agende as áreas comuns através da plataforma
      </CommonAreaTitleSC>
    </CommonAreaSectionSC>
  );
}