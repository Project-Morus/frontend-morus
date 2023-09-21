import { useState } from "react";
import Aside from "../../components/Aside";
import Footer from "./parts/Footer";
import Form from "./parts/Form";
import Header from "./parts/Header";
import { ContentSC, WrapperSC } from "./styles";
import Modal from "../../components/Modal";

const Login = () => {
  return (
    <main>
      <Aside position="left">
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

export default Login;
