import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

const Footer = () => {
  return (
    <footer className="mt-16 bg-customGray-400 p-5 text-customGray-800">
      <FooterMobile />
      <FooterDesktop />
      <p className="text-center text-xs lg:text-base">
        Copyright 2024 Timbu Company - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
