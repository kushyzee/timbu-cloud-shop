import { IoMdPerson } from "react-icons/io";
import { MdOutlineCreditCard } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { RiInformation2Line } from "react-icons/ri";
import ShippingAddress from "./ShippingAddress";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartProvider";
import toastify from "../utilities/toastify";
const ORGANIZATION_ID = import.meta.env.VITE_ORGANIZATION_ID;


const PaymentDetails = () => {
  const navigate = useNavigate();
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { state, dispatch } = useContext(CartContext);
  const { cart, total } = state;


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !customerDetails.name.trim() ||
      !customerDetails.email.trim() ||
      !customerDetails.phone.trim()
    ) {
      toastify("please fill all fields", 'error')
      return;
    }
    const productsSold = cart.map(item => (
      {
        product_id: item.id,
        amount: item.price,
        quantity: item.quantity,
        currency_code: "NGN"
      }
    ))
    const salesData = {
      products_sold: productsSold,
      currency_code: "NGN",
      first_name: customerDetails.name.split(" ")[0],
      last_name: customerDetails.name.split(" ")[1] || "",
      phone_number: customerDetails.phone,
      email: customerDetails.email,
      country_code: "+234",
      description: `sold ${cart.length} products to ${customerDetails.name} for a total of ${total} naira`,
      ORGANIZATION_ID: ORGANIZATION_ID
    }
    console.log(salesData);
    dispatch({
      type: "CLEAR_CART"
    });
    // localStorage.removeItem("cart");
    //   localStorage.removeItem("totalItems");
    //   localStorage.removeItem("subtotal");
    //   localStorage.removeItem("total");
    navigate("/success");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({
      ...customerDetails,
      [name]: value,
    });
  };

  return (
    <div>
      <h2 className="mb-3 text-base font-semibold md:text-xl">
        Payment details
      </h2>
      <form
        onSubmit={handleSubmit}
        className="border-b-2 border-customGray-400 pb-12 md:border-none"
      >
        <div className="mb-8 grid gap-3 border-b-2 border-customGray-400 pb-8 md:gap-5">
          <div>
            <label
              htmlFor="cardName"
              className="mb-1 block text-sm font-medium md:text-base"
            >
              Name on card
            </label>
            <div className="relative">
              <input
                type="text"
                id="cardName"
                placeholder="John Johnson"
                autoComplete="cc-name"
                className="w-full rounded-md border-2 border-customGray-800 py-2.5 pl-9 pr-5 text-sm focus:border-customGray-600 focus:outline-none focus:ring-1 focus:ring-customGray-600"
              />

              <span className="pointer-events-none absolute inset-y-0 start-2 grid place-content-center text-xl">
                <IoMdPerson />
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="cardNumber"
              className="mb-1 block text-sm font-medium md:text-base"
            >
              Card number
            </label>
            <div className="relative">
              <input
                type="number"
                id="cardNumber"
                placeholder="... ... ... 3434"
                autoComplete="cc-number"
                className="w-full rounded-md border-2 border-customGray-800 py-2.5 pl-9 pr-5 text-sm focus:border-customGray-600 focus:outline-none focus:ring-1 focus:ring-customGray-600"
              />

              <span className="pointer-events-none absolute inset-y-0 start-2 grid place-content-center text-xl">
                <MdOutlineCreditCard />
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="expiry"
              className="mb-1 block text-sm font-medium md:text-base"
            >
              Expiry date
            </label>
            <div className="relative">
              <input
                type="number"
                id="expiry"
                autoComplete="cc-exp"
                placeholder="MM/YY"
                className="w-1/3 rounded-md border-2 border-customGray-800 py-2.5 pl-9 pr-5 text-sm focus:border-customGray-600 focus:outline-none focus:ring-1 focus:ring-customGray-600"
              />

              <span className="pointer-events-none absolute inset-y-0 start-2 grid place-content-center text-xl">
                <BiCalendar />
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="cvv"
              className="mb-1 block text-sm font-medium md:text-base"
            >
              CVV
            </label>
            <div className="flex items-end gap-3">
              <input
                type="password"
                id="cvv"
                autoComplete="cc-csc"
                placeholder="***"
                className="w-1/4 rounded-md border-2 border-customGray-800 p-2.5 text-sm focus:border-customGray-600 focus:outline-none focus:ring-1 focus:ring-customGray-600"
              />
              <RiInformation2Line className="inline-block cursor-pointer text-2xl" />
            </div>
          </div>
        </div>

        <ShippingAddress
          customerDetails={customerDetails}
          handleChange={handleChange}
        />

        <button
          type="submit"
          className="mt-5 block rounded-md bg-customGray-800 px-4 py-2.5 text-center text-sm font-semibold text-customGray-50 md:text-base lg:mt-10"
        >
          Pay now
        </button>
      </form>
    </div>
  );
};

export default PaymentDetails;
