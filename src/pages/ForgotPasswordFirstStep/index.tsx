import Aside from "../../components/Aside";
import Footer from "./parts/Footer";
import Form from "./parts/Form";
import Header from "./parts/Header";
import { ContentSC, WrapperSC } from "./styles";

const ForgotPasswordFirstStep = () => {
  return (
    <main>
      <Aside position="right">
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

export default ForgotPasswordFirstStep;
