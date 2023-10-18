import { useTheme } from "styled-components";
import { Icon } from "../../../../components";
import { LabelSC, TitleSC, WhiteCard } from "./styles";
import { IInformationCardProps } from "./types";

const InformationCard = ({ title, label, iconName }: IInformationCardProps) => {
  const theme = useTheme();
  return (
    <WhiteCard>
      <Icon color={theme.colors.primary[400]} name={iconName} size="120"></Icon>
      <TitleSC>{title}</TitleSC>
      <LabelSC>{label}</LabelSC>
    </WhiteCard>
  );
};

export default InformationCard;
