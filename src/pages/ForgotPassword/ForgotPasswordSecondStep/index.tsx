

import { Aside } from "../../../components";
import Footer from "./parts/Footer";
import Form from "./parts/Form";
import Header from "./parts/Header";
import { ContentSC, WrapperSC } from "./styles";

export const ForgotPasswordSecondStep = () => {
  return (
    <main>
      <Aside>
        <WrapperSC>
          <ContentSC>
            <Header />
            <Form />
            <Footer />
          </ContentSC>
        </WrapperSC>
      </Aside>
    </main>
  );
};
