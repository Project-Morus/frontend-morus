import BORDER from "./consts/border";
import BREAKPOINTS from "./consts/breakpoints";
import COLORS from "./consts/colors";
import SPACING from "./consts/spacing";
import TYPOGRAPHY from "./consts/typography";

export const defaultTheme = {
  colors: COLORS,
  spacing: SPACING,
  typography: TYPOGRAPHY,
  breckpoints: BREAKPOINTS,
  border: BORDER,
} as const