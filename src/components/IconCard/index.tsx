import Icon from "../Icon";
import { CardSC } from "./styles";
import { IIconCardProps } from "./types";

const IconCard = ({ icon, stroke, variant = 'white', ...props }: IIconCardProps) => {

  return (
    <CardSC $variant={variant}
      role={props.role}
      className={props.className}
      data-testid={props?.['data-testid']}
    >
      <Icon
        name={icon}
        size="47"
        stroke={stroke}
      />
    </CardSC>
  );
}

export default IconCard;