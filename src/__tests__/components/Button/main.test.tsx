import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../../../components/Button'
import { withTheme } from '../../../helpers/withTheme'

const ButtonWithTheme = withTheme(Button)
const buttonElement = 'button'
const textButton = 'Button'
describe('Button Component', () => {
  test('Verify if component is rendering', () => {
    render(<ButtonWithTheme text={textButton} />)


    expect(screen.getByRole(buttonElement)).toBeTruthy()
  })

  test('Verify if text is rendering in Button', () => {
    render(<ButtonWithTheme text={textButton} />)

    expect(screen.getByText(textButton))
  })

  test('Receives a "click" and calls an onClick function', () => {
    const onClickTest = jest.fn()
    render(<ButtonWithTheme text={textButton} onClick={onClickTest} />)

    fireEvent.click(screen.getByRole(buttonElement))
    expect(onClickTest).toHaveBeenCalledTimes(1)
  })

  test('OnClick is not fired when the button is disabled', () => {
    const onClickTest = jest.fn()

    render(<ButtonWithTheme text={textButton} onClick={onClickTest} disabled />)

    fireEvent.click(screen.getByRole('button'))
    expect(onClickTest).not.toHaveBeenCalledTimes(1)
  })


  test("Verify that the button is disabled", () => {
    render(<ButtonWithTheme text={textButton} disabled />);

    expect(screen.getByRole(buttonElement)).toBeDisabled();
  });

  test('Snapshot Button', () => {
    const { asFragment } = render(<ButtonWithTheme text={textButton} />)

    expect(asFragment()).toMatchSnapshot()
  })
  test('Snapshot Button with variant secondary', () => {
    const { asFragment } = render(<ButtonWithTheme text={textButton} variant='secondary' />)

    expect(asFragment()).toMatchSnapshot()
  })
})