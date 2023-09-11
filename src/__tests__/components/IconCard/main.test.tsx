import { render, screen } from '@testing-library/react'
import { withTheme } from '../../../helpers/withTheme'
import IconCard from '../../../components/IconCard'

const IconCardWithTheme = withTheme(IconCard)

describe('IconCard component', () => {
  test('Verify if component is rendering', () => {
    render(<IconCardWithTheme icon="ph-smiley" role='roleIconCard' />)

    expect(screen.getByRole('roleIconCard')).toBeVisible()
  })

  test('Snapshot IconCard', () => {
    const { asFragment } = render(
      <IconCardWithTheme icon="ph-smiley" />,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('Snapshot IconCard with variant primary', () => {
    const { asFragment } = render(
      <IconCardWithTheme icon="ph-smiley" variant='primary' />,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})