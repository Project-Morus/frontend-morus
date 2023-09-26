import { fireEvent, render, screen } from '@testing-library/react'
import { withTheme } from '../../../helpers/withTheme'
import { Icon } from '../../../components'

const IconWithTheme = withTheme(Icon)

describe('Icon component', () => {
    test('Verify if component is rendering', () => {
        render(<IconWithTheme data-testid="idPhor" name="ph-smiley" />)

        screen.getByTestId('ph-idPhor')
    })

    test('Receives a "click" and calls an onClick function', () => {
        const onClickTest = jest.fn()
        render(<IconWithTheme data-testid="idPhor" name="ph-smiley" onClick={onClickTest} />)

        fireEvent.click(screen.getByTestId("ph-idPhor"))
        expect(onClickTest).toHaveBeenCalledTimes(1)
    })

    test('Snapshot Icon', () => {
        const { asFragment } = render(
            <IconWithTheme name="ph-smiley" />,
        )
        expect(asFragment()).toMatchSnapshot()
    })
})
