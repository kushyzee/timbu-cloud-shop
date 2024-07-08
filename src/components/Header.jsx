import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-customGray-800 mb-6 text-white">
      <Link to="/" className="text-sm font-bold">
        TimbuCloudShop
      </Link>
      <Link to="cart">
        <MdOutlineShoppingCart className="text-2xl" />
      </Link>
    </header>
  );
};

export default Header;
