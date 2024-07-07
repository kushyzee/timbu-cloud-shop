import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <p className="text-sm font-bold">TimbuCloudShop</p>
      <Link to="cart">
        <MdOutlineShoppingCart className="text-2xl" />
      </Link>
      </header>
  );
};

export default Header;
