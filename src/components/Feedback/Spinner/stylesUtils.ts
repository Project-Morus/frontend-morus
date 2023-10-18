import { ThemeType } from "../../../@types/styles";
import { ColorsTypes } from "./interface";

export function getColorSpinner(color: ColorsTypes, theme: ThemeType) {
  const colorsHex: Record<ColorsTypes, string> = {
    primary: theme.colors.primary[200],
    red: theme.colors.red[200],
    green: theme.colors.green[200],
  };

  return colorsHex[color]
}