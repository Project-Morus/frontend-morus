import { IBaseProps } from "../../../types"

export interface ISequencialStepperProps extends IBaseProps {
  items: ISequencialStepperItems[]
  currentStep: number,
}

export interface ISequentialStepProps extends ISequencialStepperProps {
  index: number
  status: DotStatusTypes
}

interface ISequencialStepperItems {
  key: number,
}

export type DotStatusTypes = 'active' | 'inactive'