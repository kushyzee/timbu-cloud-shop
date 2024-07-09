import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <header className="mb-6 bg-customGray-800 p-4 text-white lg:py-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-center md:justify-between">
        <Link
          to="/"
          className="mx-auto inline-block self-center text-sm font-bold md:mx-0 lg:text-2xl"
        >
          TimbuCloudShop
        </Link>
        <Link to="cart" className="inline-flex items-center gap-2">
          <MdOutlineShoppingCart className="text-2xl lg:text-3xl" />
          <span className="hidden text-xl lg:inline-block font-semibold">Cart</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
