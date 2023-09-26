
import { Aside, Icon } from "../../../components";
import Footer from "./parts/Footer";
import Form from "./parts/Form";
import Header from "./parts/Header";
import { BackToLoginButtonSC, ContentSC, WrapperSC } from "./styles";

export const ForgotPasswordFirstStep = () => {
  return (
    <main>
      <Aside>
        <WrapperSC>
          <ContentSC>
            <BackToLoginButtonSC to="/login">
              <Icon name="ph-arrow-left" size="20" stroke="bold" />
              Voltar para a tela de login
            </BackToLoginButtonSC>
            <Header />
            <Form />
            <Footer />
          </ContentSC>
        </WrapperSC>
      </Aside>
    </main>
  );
};
