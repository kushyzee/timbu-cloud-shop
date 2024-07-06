import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <nav className="p-4 mb-12">
        <ul className="flex items-center gap-4 text-blue-700 font-bold">
          <li><Link to="/">Home</Link></li>
          <li><Link to="cart">Cart</Link></li>
          <li><Link to="checkout">Checkout</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header