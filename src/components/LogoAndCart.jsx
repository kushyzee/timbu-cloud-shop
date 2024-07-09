import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

const LogoAndCart = () => {
  return (
    <div className="mx-auto flex w-full max-w-screen-xl items-center justify-center md:justify-between">
      <Link
        to="/"
        className="mx-auto inline-block self-center text-sm font-bold md:mx-0 lg:text-2xl"
      >
        TimbuCloudShop
      </Link>
      <Link to="cart" className="inline-flex items-center gap-2">
        <MdOutlineShoppingCart className="text-2xl lg:text-3xl" />
        <span className="hidden text-xl font-semibold lg:inline-block">
          Cart
        </span>
      </Link>
    </div>
  );
};

export default LogoAndCart;
