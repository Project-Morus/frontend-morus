import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import ForgotPasswordFirstStep from "../pages/ForgotPasswordFirstStep";
import DefaultLayoutAuth from "../layout/DefaultLayoutAuth";
import LandingPage from "../pages/LandingPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/" element={<DefaultLayoutAuth />}>
        <Route path="login" element={<Login />} />
        <Route path="/forgotPasswordFirstStep" element={<ForgotPasswordFirstStep />} />
      </Route>
    </Routes>
  );
};

export default Router;
