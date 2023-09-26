import { render, screen } from '@testing-library/react'
import { withTheme } from '../../../helpers/withTheme'
import { SequencialStepper }from '../../../components'
import { SEQUENTIAL_STEPPER_DATA } from './mockData'

const SequencialStepperWithTheme = withTheme(SequencialStepper)

describe('SequencialStepper component', () => {
  test('Verify if component is rendering', () => {
    render(<SequencialStepperWithTheme role='roleSequecialStepper' items={SEQUENTIAL_STEPPER_DATA} currentStep={1} />)

    expect(screen.getByRole('roleSequecialStepper'))
  })

  test('Snapshot SequencialStepper', () => {
    const { asFragment } = render(
      <SequencialStepperWithTheme items={SEQUENTIAL_STEPPER_DATA} currentStep={1} />,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('Snapshot SequencialStepper with currentStep in two', () => {
    const { asFragment } = render(
      <SequencialStepperWithTheme items={SEQUENTIAL_STEPPER_DATA} currentStep={2} />,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('Snapshot SequencialStepper with currentStep in last step', () => {
    const { asFragment } = render(
      <SequencialStepperWithTheme items={SEQUENTIAL_STEPPER_DATA} currentStep={3} />,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
