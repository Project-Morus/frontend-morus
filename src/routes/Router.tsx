import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import DefaultLayoutAuth from "../layout/DefaultLayoutAuth";
import LandingPage from "../pages/LandingPage";
import ForgotPasswordFirstStep from "../pages/ForgotPassword/ForgotPasswordFirstStep";
import ForgotPasswordSecondStep from "../pages/ForgotPassword/ForgotPasswordSecondStep";
import CondominiumRegisterFirstStep from "../pages/CondominiumRegister/FirstStep";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/" element={<DefaultLayoutAuth />}>
        <Route path="login" element={<Login />} />
        <Route path="forgotPasswordFirstStep" element={<ForgotPasswordFirstStep />} />
        <Route path="forgotPasswordSecondStep" element={<ForgotPasswordSecondStep />} />
        <Route path="condominiumRegisterFirstStep" element={<CondominiumRegisterFirstStep />} />
      </Route>
    </Routes>
  );
};

export default Router;
