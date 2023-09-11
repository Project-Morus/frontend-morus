import { IconNamesTypes } from "../types";

export const getIconTestId = (iconName: IconNamesTypes, testId?: string) => {
  if (testId) {
    return `ph-${testId}`
  }

  return iconName
}