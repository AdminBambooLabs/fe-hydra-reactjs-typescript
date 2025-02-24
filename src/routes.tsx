import { Routes, Route } from "react-router";
import { AuthArea } from "./layouts/AuthArea";
import { Dashboard } from "./pages/Dashboard";
// import { Login } from "./pages/Login";

export const Router = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route element={<AuthArea />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Router;
