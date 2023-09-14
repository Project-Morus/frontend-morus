import { WrapperSC } from "../styles";
import Form from "./parts/Form";
import Header from "./parts/Header";
import { ContentSC } from "./styles";

const CondominiumRegisterThirdStep = () => {
  return (
    <main>
      <WrapperSC>
        <ContentSC>
          <Header />
          <Form />
        </ContentSC>
      </WrapperSC>
    </main>
  );
};

export default CondominiumRegisterThirdStep;
