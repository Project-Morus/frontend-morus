import { render, screen } from '@testing-library/react'
import { withTheme } from '../../../helpers/withTheme'
import Divider from '../../../components/Divider'

const DividerWithTheme = withTheme(Divider)
describe('Divider Component', () => {
  test('Verify if component is rendering', () => {
    render(<DividerWithTheme />)
    expect(screen.getByRole('divider')).toBeVisible()
  })

  test('Snapshot Divider', () => {
    const { asFragment } = render(<DividerWithTheme />)

    expect(asFragment()).toMatchSnapshot()
  })
  test('Snapshot Divider with variant secondary', () => {
    const { asFragment } = render(<DividerWithTheme variant='secondary' />)

    expect(asFragment()).toMatchSnapshot()
  })
})