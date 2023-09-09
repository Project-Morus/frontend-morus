import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import DefaultLayoutAuth from "../layout/DefaultLayoutAuth";
import LandingPage from "../pages/LandingPage";
import ForgotPasswordFirstStep from "../pages/ForgotPassword/ForgotPasswordFirstStep";
import ForgotPasswordSecondStep from "../pages/ForgotPassword/ForgotPasswordSecondStep";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/" element={<DefaultLayoutAuth />}>
        <Route path="login" element={<Login />} />
        <Route path="forgotPasswordFirstStep" element={<ForgotPasswordFirstStep />} />
        <Route path="forgotPasswordSecondStep" element={<ForgotPasswordSecondStep />} />
      </Route>
    </Routes>
  );
};

export default Router;
