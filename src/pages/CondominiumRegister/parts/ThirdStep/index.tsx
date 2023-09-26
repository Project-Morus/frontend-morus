import Form from "./parts/Form";
import Header from "./parts/Header";
import { ContentSC, WrapperSC   } from "./styles";

export const CondominiumRegisterThirdStep = () => {
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
