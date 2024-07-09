import PageLabel from "../components/PageLabel";
import RadioButtons from "../components/RadioButtons";
import PaymentDetails from "../components/PaymentDetails";
import OrderSummary from "../components/OrderSummary";
import CartItem from "../components/CartItem";

const Checkout = () => {
  return (
    <section className="text-sm text-customGray-800 lg:mt-12">
      <PageLabel name="Checkout" page="/cart" />

      <div className="mt-5 md:flex items-start gap-6 xl:gap-12 justify-between">
        <div className="flex-1 md:max-w-sm xl:max-w-lg">
          <div className="mt-5 md:mt-0 border-b-2 border-customGray-400 pb-10">
            <h2 className="mb-3 text-base font-semibold">Payment method</h2>
            <RadioButtons />
          </div>
          <PaymentDetails />
        </div>
        <div className="flex flex-col gap-4 lg:justify-between lg:flex-row lg:items-start flex-1">
          <OrderSummary isCart={false} />
          <CartItem isCart={false} className="mt-8" />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
