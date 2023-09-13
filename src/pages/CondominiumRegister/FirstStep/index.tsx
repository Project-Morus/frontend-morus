import Aside from "../../../components/Aside";
import Form from "./parts/Form";
import Header from "./parts/Header";
import { ContentSC, WrapperSC } from "./styles";

const CondominiumRegisterFirstStep = () => {
  return (
    <main>
      <Aside>
        <WrapperSC>
          <ContentSC>
            <Header />
            <Form />
          </ContentSC>
        </WrapperSC>
      </Aside>
    </main>
  );
};

export default CondominiumRegisterFirstStep;
