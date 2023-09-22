import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import DefaultLayoutAuth from "../layout/DefaultLayoutAuth";
import LandingPage from "../pages/LandingPage";
import ForgotPasswordFirstStep from "../pages/ForgotPassword/ForgotPasswordFirstStep";
import ForgotPasswordSecondStep from "../pages/ForgotPassword/ForgotPasswordSecondStep";
import CondominiumRegister from "../pages/CondominiumRegister";
import DefaultLayoutSystem from "../layout/DefaultLayoutSystem";
import Home from "../pages/Home";
import Residents from "../pages/Residents";

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
      </Route>
    </Routes>
  );
};

export default Router;
