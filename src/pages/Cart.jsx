import OrderSummary from "../components/OrderSummary";
import PageLabel from "../components/PageLabel";
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <section className="text-base text-customGray-800 lg:mb-32">

      <div className="md:flex items-start justify-between gap-5 lg:gap-10">
      <div className="md:flex-1">
        <div className="mb-5 flex items-center justify-between">
          <PageLabel name="Cart" page="/" />
          <p className="text-sm font-medium">1 item</p>
        </div>
        
        <CartItem />
        
      </div>
        <OrderSummary />
      </div>
    </section>
  );
};

export default Cart;
