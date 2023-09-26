import Form from "./parts/Form";
import Header from "./parts/Header";
import { ContentSC, WrapperSC } from "./styles";

export const CondominiumRegisterSecondStep = () => {
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
