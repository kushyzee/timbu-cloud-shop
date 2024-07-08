import footerImg from "../assets/images/footer-img.png";
const Footer = () => {
  return (
    <footer className="mt-16 bg-customGray-400 p-5 text-sm text-customGray-800">
      <div className="mb-7">
        <h3 className="mb-1 text-base font-bold">Address</h3>
        <p>16, Clementine Street</p>
        <p>NW Bariga,</p>
        <p>Lagos, Nigeria</p>
      </div>
      <div>
        <h3 className="mb-1 text-base font-bold">Contact</h3>
        <p>support@timbucloudshop.com</p>
        <p>help@timbucloudshop.com</p>
        <p className="font-bold">01-234567, 01-99952</p>
      </div>
      <div className="mt-11 flex flex-col items-center justify-center">
        <div className="aspect-square w-28">
          <img
            src={footerImg}
            alt="footer image"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="mt-3 mb-20 text-center">
          <h3 className="mb-1 text-base font-bold">TimbuCloudShop</h3>
          <p>
            From precision knives to stylish coffee makers, we’ve got everything
            you need to elevate your cooking experience.
          </p>
        </div>
        <p className="text-center text-xs">Copyright 2024 Timbu Company - All rights reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
