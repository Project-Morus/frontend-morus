
import CardInformation from "./parts/CardInformation";
import CardInformations from "./parts/CardInformations";
import { ContainerSC } from "./styles";

const Home = () => {
  return (
    <ContainerSC>
      <CardInformation />
      <CardInformations />
    </ContainerSC>
  );
}

export default Home;