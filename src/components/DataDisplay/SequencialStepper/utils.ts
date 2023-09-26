import { DotStatusTypes, ISequencialStepperProps } from "./types"

export const getCurrentIndexFromCurrentKey = (currentStepKey: number, items: ISequencialStepperProps['items']): number => {
  let index = 0
  items.forEach((item, i) => {
    if (item.key === currentStepKey) {
      index = i
    }
  })
  return index
}

export const getStepStatusFromIndex = (
  stepIndex: number, currentIndex: number,
): DotStatusTypes => {
  if (stepIndex === currentIndex) return 'active'
  return 'inactive'
}