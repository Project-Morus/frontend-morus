import { useTheme } from "styled-components";

const Home = () => {
  const theme = useTheme()
  return (
    <div>
      <h1 style={{ fontSize: `${theme.typography.HEADERS_SIZES.h1}` }}>Home</h1>
    </div>
  );
}

export default Home;