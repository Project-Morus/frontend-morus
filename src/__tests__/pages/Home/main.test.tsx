import { render, screen } from '@testing-library/react';
import Login from '../../../pages/Login';
import { withTheme } from '../../../helpers/withTheme';

const LoginWithTheme = withTheme(Login)
describe('Login Component', () => {
  test('Render component', () => {
    render(<LoginWithTheme />)
    expect(screen.getByText('Login'))
  })

  test('Snapshot Login', () => {
    const { asFragment } = render(
      <LoginWithTheme />,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})