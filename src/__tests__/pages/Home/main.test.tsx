import { render, screen } from '@testing-library/react';
import Home from '../../../pages/Home';
import { withTheme } from '../../../helpers/withTheme';

const HomeWithTheme = withTheme(Home)
describe('Home Component', () => {
  test('Render component', () => {
    render(<HomeWithTheme />)
    expect(screen.getByText('Home'))
  })

  test('Snapshot Home', () => {
    const { asFragment } = render(
      <HomeWithTheme />,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})