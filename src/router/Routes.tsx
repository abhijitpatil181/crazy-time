import { Navigate, Route, Routes } from "react-router-dom";
import { CrazyTime } from "../pages";

const defaultNavigate = <Navigate to="/crazy-time" replace />;

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={defaultNavigate} />
      <Route path="/crazy-time" element={<CrazyTime />} />
    </Routes>
  );
};

export default Router;
