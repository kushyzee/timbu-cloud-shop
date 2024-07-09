import React from "react";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  return (
    <div className="border-2 text-sm border-customGray-300 rounded-[10px] gap-2 text-customGray-800 p-2.5 mt-16 mb-2">
      <div className="bg-customTeal text-center w-full py-2.5 rounded-md text-base font-semibold mb-5">
        <h3>Order Summary</h3>
      </div>
      <form>
        <label htmlFor="name" className="font-semibold block mb-1">
          Enter promo code
        </label>
        <div className="flex gap-2 items-center justify-between pb-5 mb-7 border-b-2 border-customGray-300">
          <input
            type="text"
            id="name"
            placeholder="Promo code"
            className="block border-2 px-2.5 py-2 w-full rounded-md"
          />
          <button className="block bg-customGray-800 text-customGray-50 text-center py-2.5 px-5 rounded-md">
            Apply
          </button>
        </div>
      </form>

      <div className="font-semibold flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p>Subtotal</p>
          <p>N7,999.98</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Shipping cost</p>
          <p>N2,000.00</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Discount</p>
          <p>N/A</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Total</p>
          <p>N9,999.98</p>
        </div>
      </div>
      <Link to="/checkout" className="block bg-customGray-800 text-customGray-50 text-center py-2.5 px-5 rounded-md mt-6">
        Checkout
      </Link>
    </div>
  );
};

export default OrderSummary;
