import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import DefaultLayout from "../layout/DefaultLayout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Router;
