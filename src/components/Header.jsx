import LogoAndCart from "./LogoAndCart";
import Steps from "./Steps";
import { useLocation } from "react-router-dom";

const getCurrentPath = () => {
  const { pathname } = useLocation();
  if (pathname === "/checkout" || pathname === "/success") {
    return <Steps path={pathname} />;
  } else {
    return <LogoAndCart />;
  }
};

const Header = () => {
  return (
    <header className="mb-6 flex min-h-14 items-center bg-customGray-800 px-4 text-white lg:mb-20 lg:min-h-28 lg:px-8 lg:py-6">
      {getCurrentPath()}
    </header>
  );
};

export default Header;
