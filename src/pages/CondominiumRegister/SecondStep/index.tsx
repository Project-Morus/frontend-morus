import Form from "./parts/Form";
import Header from "./parts/Header";
import { ContentSC, WrapperSC } from "./styles";

const CondominiumRegisterSecondStep = () => {
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

export default CondominiumRegisterSecondStep;
