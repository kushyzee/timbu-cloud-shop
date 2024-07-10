import React from "react";
import { Link } from "react-router-dom";

const promoCode = () => {
  return (
    <form>
      <label htmlFor="promoCode" className="mb-1 block font-semibold">
        Enter promo code
      </label>
      <div className="border-customGray-300 mb-7 flex items-center justify-between gap-2 border-b-2 pb-5">
        <input
          type="text"
          id="promoCode"
          placeholder="Promo code"
          className="block w-full text-sm lg:text-base rounded-md border px-2.5 py-2 focus:outline-none focus:border-customGray-800 focus:ring-customGray-800 focus:ring-1"
        />
        <button className="block rounded-md bg-customGray-800 px-5 py-2 lg:py-2.5 text-center text-customGray-50">
          Apply
        </button>
      </div>
    </form>
  );
};

const OrderSummary = ({ isCart=true }) => {
  return (
    <div className="border-customGray-300 mb-2 mt-16 gap-2 rounded-xl border-2 p-2.5 text-sm text-customGray-800 md:mb-0 md:mt-0 lg:text-base max-w-sm flex-1">
      <div className="mb-5 w-full rounded-md bg-customTeal py-2.5 text-center text-base font-semibold">
        <h3 className="lg:text-2xl">Order Summary</h3>
      </div>

      {isCart && promoCode()}
      <div className="flex flex-col gap-4 font-semibold">
        <div className="flex items-center justify-between">
          <p>Subtotal</p>
          <p>N7,999.98</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Shipping cost</p>
          <p>N2,000.00</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Discount</p>
          <p>N/A</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Total</p>
          <p>N9,999.98</p>
        </div>
      </div>
      {isCart && <Link to="/checkout" className="mt-6 block rounded-md bg-customGray-800 px-5 py-2.5 text-center text-customGray-50">Checkout</Link>}
      
    </div>
  );
};

export default OrderSummary;
