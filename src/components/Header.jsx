import LogoAndCart from "./LogoAndCart";
import Steps from "./Steps";
import { useLocation } from "react-router-dom";

const getCurrentPath = () => {
  const { pathname } = useLocation();
  if (pathname === "/" || pathname === "/cart" || pathname === "/404") {
    return <LogoAndCart />;
  } else if (pathname === "/checkout" || pathname === "/success") {
    return <Steps path={pathname} />;
  }
};

const Header = () => {
  return (
    <header className="mb-6 lg:mb-20 min-h-14 lg:min-h-28 bg-customGray-800 px-4 flex items-center text-white lg:px-8 lg:py-6">
      {getCurrentPath()}
    </header>
  );
};

export default Header;
