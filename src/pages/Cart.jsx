import OrderSummary from "../components/OrderSummary";
import PageLabel from "../components/PageLabel";
import CartItem from "../components/CartItem";
import CartItemDesktop from "../components/CartItemDesktop";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const Cart = () => {
  const { state } = useContext(CartContext);
  return (
    <section className="text-base text-customGray-800 lg:mb-32">
      {state.totalItems === 0 ? (
        <div className="pb-28 pt-3">
          <h1 className="text-center text-3xl font-bold lg:text-4xl">
            Cart is empty
          </h1>
          <Link
            to="/"
            className="mx-auto mt-10 block w-fit rounded-md bg-customGray-800 px-10 py-2.5 text-center text-customGray-50 lg:text-xl"
          >
            Back to home
          </Link>
        </div>
      ) : (
        <div className="items-start justify-between gap-5 md:flex lg:gap-10">
          <div className="md:flex-1">
            <div className="mb-5 flex items-center justify-between">
              <PageLabel name="Cart" page="/" />
              <p className="text-sm font-medium">{state.totalItems} item{state.totalItems > 1 && 's'}</p>
            </div>

            <CartItem cartContext={CartContext} />
            <CartItemDesktop />
          </div>
          <OrderSummary />
        </div>
      )}
    </section>
  );
};

export default Cart;
