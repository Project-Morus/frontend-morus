import { useState } from "react";
import { createArrayWithObjectsKeys } from "../../helpers/createArrayWithObjectsKeys";
import { CentralizerSC, WrapperSC } from "./styles";
import { Aside, Button, SequencialStepper } from "../../components";
import { CondominiumRegisterFirstStep, CondominiumRegisterSecondStep, CondominiumRegisterThirdStep } from "./parts";
import { useNavigate } from "react-router-dom";

const CondominiumRegister = () => {
  const navigate = useNavigate()
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
            onClick={() => selectedStep < 3 ? setSelectedStep(selectedStep + 1) : navigate('/login')}
            maxWidth={480}
          />
          <SequencialStepper items={quantitySteps} currentStep={selectedStep} />
        </CentralizerSC>
      </WrapperSC>
    </Aside>
  );
};

export default CondominiumRegister;
