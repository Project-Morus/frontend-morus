import { render } from '@testing-library/react';
import Login from '../../../pages/Login';
import { withTheme } from '../../../helpers/withTheme';
import { MemoryRouter } from 'react-router';

const LoginWithTheme = withTheme(Login)
describe('Login Component', () => {
  test('Render component', () => {
    render(
      <MemoryRouter>
        <LoginWithTheme />
      </MemoryRouter>
    )
    expect(true).toBeTruthy()
  })

  test('Snapshot Login', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <LoginWithTheme />
      </MemoryRouter>
      ,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})