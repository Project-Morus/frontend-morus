
import Aside from "../../../components/Aside";
import Footer from "./parts/Footer";
import Form from "./parts/Form";
import Header from "./parts/Header";
import { BackToLoginButtonSC, ContentSC, WrapperSC } from "./styles";

const ForgotPasswordFirstStep = () => {
  return (
    <main>
      <Aside>
        <WrapperSC>
          <ContentSC>
            {/* Falta colocar ícone de seta para voltar */}
            <BackToLoginButtonSC>
              <p>Icon</p>Voltar para a tela de login
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

export default ForgotPasswordFirstStep;
