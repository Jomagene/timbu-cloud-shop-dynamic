import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ScrollRestoration } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
