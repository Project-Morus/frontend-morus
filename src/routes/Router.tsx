import { Routes, Route } from "react-router-dom";
import DefaultLayoutAuth from "../layout/DefaultLayoutAuth";
import DefaultLayoutSystem from "../layout/DefaultLayoutSystem";
import { Login, CondominiumRegister, ForgotPasswordFirstStep,  ForgotPasswordSecondStep,LandingPage, Home, Residents, Archives, CashBook, Occurrences } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route element={<DefaultLayoutAuth />}>
        <Route path="login" element={<Login />} />
        <Route path="condominium-register" element={<CondominiumRegister />} />
      </Route>

      <Route path="forgotPassword">
        <Route path="sendEmail" element={<ForgotPasswordFirstStep />} />
        <Route path="newPassword" element={<ForgotPasswordSecondStep />} />
      </Route>

      <Route path="system" element={<DefaultLayoutSystem />}>
        <Route path="home" element={<Home />} />
        <Route path="residents" element={<Residents />} />
        <Route path="archives" element={<Archives />} />
        <Route path="cashBook" element={<CashBook />} />
        <Route path="occurrences" element={<Occurrences />} />
      </Route>
    </Routes>
  );
};

export default Router;
