import { SEQUENTIAL_STEPPER_DATA } from "../../__tests__/components/SequencialStepper/mockData";
import SequencialStepper from "../../components/SequencialStepper";

const LandingPage = () => {
  return (
    <>
      <h1>Landing Page</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <SequencialStepper items={SEQUENTIAL_STEPPER_DATA} currentStep={1} />
        <SequencialStepper items={SEQUENTIAL_STEPPER_DATA} currentStep={2} />
        <SequencialStepper items={SEQUENTIAL_STEPPER_DATA} currentStep={3} />
      </div>
    </>
  );
}

export default LandingPage;