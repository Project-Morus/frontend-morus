import { useState } from "react";
import Aside from "../../components/Aside";
import SequencialStepper from "../../components/SequencialStepper";
import { createArrayWithObjectsKeys } from "../../helpers/createArrayWithObjectsKeys";
import CondominiumRegisterFirstStep from "./FirstStep";
import CondominiumRegisterSecondStep from "./SecondStep";
import CondominiumRegisterThirdStep from "./ThirdStep";
import { CentralizerSC, WrapperSC } from "./styles";
import Button from "../../components/Button";

const CondominiumRegister = () => {
  const quantitySteps = createArrayWithObjectsKeys(3);
  const [selectedStep, setSelectedStep] = useState(1);

  return (
    <Aside>
      <WrapperSC>
        {selectedStep === quantitySteps[0].key && <CondominiumRegisterFirstStep />}
        {selectedStep === quantitySteps[1].key && <CondominiumRegisterSecondStep />}
        {selectedStep === quantitySteps[2].key && <CondominiumRegisterThirdStep />}

        <CentralizerSC>
          <Button
            text={selectedStep < 3 ? "Próxima etapa" : "Finalizar"}
            onClick={() => selectedStep < 3 && setSelectedStep(selectedStep + 1)}
          />
          <SequencialStepper items={quantitySteps} currentStep={selectedStep} />
        </CentralizerSC>
      </WrapperSC>
    </Aside>
  );
};

export default CondominiumRegister;
