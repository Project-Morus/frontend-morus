import { createElement, useMemo } from "react";
import { IconSC, PureIconSC } from "./styles";
import { IIconProps, PhosphorIconsTypes } from "./types";
import PhosphorIconsMap from "./parts/phosphorIconsMap";
import { getIconTestId } from "./parts/utils";

const Icon = ({ name, color, size, stroke, onClick, ...props }: IIconProps) => {
  const ChosenIcon = useMemo(() => {
    const icon = PhosphorIconsMap[name as PhosphorIconsTypes]

    const element = createElement(icon, {
      size: size || '24',
      weight: stroke,
    })

    return element
  }, [name, size, stroke])

  return (
    <IconSC $iconColor={color}>
      <PureIconSC $hasOnClick={!!onClick} onClick={onClick} className={props.className} data-testid={getIconTestId(name, props?.['data-testid'])}>
        {ChosenIcon}
      </PureIconSC>
    </IconSC>
  );
}

export default Icon;