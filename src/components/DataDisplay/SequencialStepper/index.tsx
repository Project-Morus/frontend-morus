import { ContainerSC, DotSC } from "./styles";
import { ISequencialStepperProps } from "./types";
import { getCurrentIndexFromCurrentKey, getStepStatusFromIndex } from "./utils";

const SequencialStepper = ({ items, currentStep, ...props }: ISequencialStepperProps) => {
  const currentStepKey = getCurrentIndexFromCurrentKey(currentStep, items)

  return (
    <ContainerSC role={props?.role}>
      {items.map((item, index) => {
        const status = getStepStatusFromIndex(index, currentStepKey)
        return (
          <DotSC key={item.key} $status={status} />
        )
      })}
    </ContainerSC>
  );
}

export default SequencialStepper;