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

      <Route element={<DefaultLayoutAuth />}>
        <Route path="login" element={<Login />} />
        <Route path="condominium-register">
          <Route path="firstStep" element={<CondominiumRegisterFirstStep />} />
        </Route>

        <Route path="forgotPassword">
          <Route path="sendEmail" element={<ForgotPasswordFirstStep />} />
          <Route path="newPassword" element={<ForgotPasswordSecondStep />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
