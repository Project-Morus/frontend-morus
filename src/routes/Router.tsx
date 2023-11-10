import { Routes, Route, BrowserRouter } from "react-router-dom";
import DefaultLayoutAuth from "../layout/DefaultLayoutAuth";
import DefaultLayoutSystem from "../layout/DefaultLayoutSystem";
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
  Orders,
  Votes,
  MonthlyFee,
} from "../pages";
import { AuthGuard } from "./AuthGuard";
import CommonArea from "../pages/CommonArea";
import AreaDetails from "../pages/CommonArea/parts/AreaDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/" element={<LandingPage />} />

          <Route element={<DefaultLayoutAuth />}>
            <Route path="login" element={<Login />} />
            <Route path="condominium-register" element={<CondominiumRegister />} />
          </Route>

          <Route path="forgotPassword">
            <Route path="sendEmail" element={<ForgotPasswordFirstStep />} />
            <Route path="newPassword" element={<ForgotPasswordSecondStep />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route path="system" element={<DefaultLayoutSystem />}>
            <Route path="" element={<Home />} />
            <Route path="residents" element={<Residents />} />
            <Route path="fines" element={<Fines />} />
            <Route path="orders" element={<Orders />} />
            <Route path="votes" element={<Votes />} />
            <Route path="archives" element={<Archives />} />
            <Route path="cashBook" element={<CashBook />} />
            <Route path="monthlyFee" element={<MonthlyFee />} />
            <Route path="common-areas/area" element={<AreaDetails />} />
            <Route path="occurrences" element={<Occurrences />} />
            <Route path="informations-mural" element={<InformationsMural />} />
            <Route path="common-areas" element={<CommonArea />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
