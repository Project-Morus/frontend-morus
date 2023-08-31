import { useTheme } from "styled-components";

const Login = () => {
  const theme = useTheme()
  return (
    <div>
      <h1 style={{ fontSize: `${theme.typography.HEADERS_SIZES.h1}` }}>Login</h1>
    </div>
  );
}

export default Login;