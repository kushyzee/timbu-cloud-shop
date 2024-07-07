import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <header>
      <p>TimbuCloudShop</p>
      <nav className="p-4 mb-12 hidden">
        <ul className="flex items-center gap-4 text-blue-700 font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
          <li>
            <Link to="checkout">Checkout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
