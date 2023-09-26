
import { useTheme } from "styled-components";

import { ContentResidentSC, WrapperIconSC, WrapperInfResidentSC, NameResidentSC, RoleResidentSC } from "./styles";
import { Icon } from "../../../../components";

const InfoResident = () => {
  const theme = useTheme()

  return (
    <ContentResidentSC>
      <WrapperIconSC>
        <Icon name="ph-user" color={theme.colors.orange[500]} size="28" />
      </WrapperIconSC>

      <WrapperInfResidentSC>
        <NameResidentSC>
          Eduarda Simone
        </NameResidentSC>
        <RoleResidentSC>Síndico(a)</RoleResidentSC>
      </WrapperInfResidentSC>
    </ContentResidentSC>
  );
}

export default InfoResident;