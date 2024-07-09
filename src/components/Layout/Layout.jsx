import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="min-w-[350px] bg-customGray-50">
      <Header />
      <main className="lg mx-auto px-5 lg:max-w-screen-xl lg:px-8 xl:px-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
