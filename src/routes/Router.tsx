import { Routes, Route } from "react-router-dom";
import DefaultLayoutAuth from "../layout/DefaultLayoutAuth";
import DefaultLayoutSystem from "../layout/DefaultLayoutSystem";
<<<<<<< HEAD
import {
  Login,
  CondominiumRegister,
  ForgotPasswordFirstStep,
  ForgotPasswordSecondStep,
  LandingPage,
  Home,
  Residents,
  Archives,
  CashBook,
  Occurrences,
  Fines,
  InformationsMural,
} from "../pages";
import { AuthGuard } from "./AuthGuard";
=======
import { Login, CondominiumRegister, ForgotPasswordFirstStep,  ForgotPasswordSecondStep,LandingPage, Home, Residents, Archives, CashBook, Occurrences, Fines } from "../pages";
>>>>>>> b83e02e (Revert "Merge branch 'main' of https://github.com/Project-Morus/frontend-morus")

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

<<<<<<< HEAD
        <Route element={<AuthGuard isPrivate />}>
          <Route path="system" element={<DefaultLayoutSystem />}>
            <Route path="" element={<Home />} />
            <Route path="residents" element={<Residents />} />
            <Route path="fines" element={<Fines />} />
            <Route path="archives" element={<Archives />} />
            <Route path="cashBook" element={<CashBook />} />
            <Route path="occurrences" element={<Occurrences />} />
            <Route path="informations-mural" element={<InformationsMural />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
=======
      <Route path="system" element={<DefaultLayoutSystem />}>
        <Route path="" element={<Home />} />
        <Route path="residents" element={<Residents />} />
        <Route path="fines" element={<Fines />} />
        <Route path="archives" element={<Archives />} />
        <Route path="cashBook" element={<CashBook />} />
        <Route path="occurrences" element={<Occurrences />} />
      </Route>
    </Routes>
>>>>>>> b83e02e (Revert "Merge branch 'main' of https://github.com/Project-Morus/frontend-morus")
  );
};

export default Router;
