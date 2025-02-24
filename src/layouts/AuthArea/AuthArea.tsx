import { Outlet } from "react-router";
import { Navbar } from "../../components/Navbar";

const AuthArea = () => {
  return (
    <>
      <header>
        <Navbar title="Teste" />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthArea;
