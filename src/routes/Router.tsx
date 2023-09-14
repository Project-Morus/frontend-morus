import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import DefaultLayoutAuth from "../layout/DefaultLayoutAuth";
import LandingPage from "../pages/LandingPage";
import ForgotPasswordFirstStep from "../pages/ForgotPassword/ForgotPasswordFirstStep";
import ForgotPasswordSecondStep from "../pages/ForgotPassword/ForgotPasswordSecondStep";
import CondominiumRegisterFirstStep from "../pages/CondominiumRegister/FirstStep";
import CondominiumRegisterSecondStep from "../pages/CondominiumRegister/SecondStep";
import CondominiumRegisterThirdStep from "../pages/CondominiumRegister/ThirdStep";
import CondominiumRegister from "../pages/CondominiumRegister";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route element={<DefaultLayoutAuth />}>
        <Route path="login" element={<Login />} />
        <Route path="condominium-register" element={<CondominiumRegister />}>
          <Route path="firstStep" element={<CondominiumRegisterFirstStep />} />
          <Route path="secondStep" element={<CondominiumRegisterSecondStep />} />
          <Route path="thirdStep" element={<CondominiumRegisterThirdStep />} />
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
