import OrderSummary from "../components/OrderSummary";
import PageLabel from "../components/PageLabel";
import CartItem from "../components/CartItem";
import CartItemDesktop from "../components/CartItemDesktop";

const Cart = () => {
  return (
    <section className="text-base text-customGray-800 lg:mb-32">
      <div className="items-start justify-between gap-5 md:flex lg:gap-10">
        <div className="md:flex-1">
          <div className="mb-5 flex items-center justify-between">
            <PageLabel name="Cart" page="/" />
            <p className="text-sm font-medium">1 item</p>
          </div>

          <div className="hidden mb-4 lg:flex items-center justify-between text-customGray-600 pb-4 border-b border-customGray-200">
            <div>
              <label htmlFor="products" className="cursor-pointer flex items-center gap-2">
                <input
                  type="checkbox"
                  class="size-5 rounded cursor-pointer border-customGray-600"
                  id="products"
                  name="products"
                />
                PRODUCTS
              </label>
            </div>
            <p className="ml-[100px]">Quantity</p> 
            <p>PRICE</p> 
            <p>REMOVE</p> 
          </div>

          <CartItem />
          <CartItemDesktop />
        </div>
        <OrderSummary />
      </div>
    </section>
  );
};

export default Cart;
