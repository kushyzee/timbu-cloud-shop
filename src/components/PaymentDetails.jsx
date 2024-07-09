import { IoMdPerson } from "react-icons/io";
import { MdOutlineCreditCard } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { RiInformation2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";

const PaymentDetails = () => {
  return (
    <div>
      <h2 className="font-semibold text-base mb-3">Payment details</h2>
      <form className="pb-12 border-b-2 border-customGray-400">
        <div className="grid gap-3 mb-8 pb-8 border-b-2 border-customGray-400">
          <div>
            <label
              htmlFor="cardName"
              className="block text-sm font-medium mb-1"
            >
              Name on card
            </label>
            <div className="relative">
              <input
                required
                type="text"
                id="cardName"
                placeholder="John Johnson"
                autoComplete="cc-name"
                className="w-full rounded-md border-2 border-customGray-800 pl-9 pr-5 text-sm py-2.5 focus:outline-none focus:border-customGray-600 focus:ring-customGray-600 focus:ring-1"
              />

              <span className="pointer-events-none absolute inset-y-0 start-2 grid place-content-center text-xl">
                <IoMdPerson />
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium mb-1"
            >
              Card number
            </label>
            <div className="relative">
              <input
                required
                type="number"
                id="cardNumber"
                placeholder="... ... ... 3434"
                autoComplete="cc-number"
                className="w-full rounded-md border-2 border-customGray-800 pl-9 pr-5 text-sm py-2.5 focus:outline-none focus:border-customGray-600 focus:ring-customGray-600 focus:ring-1"
              />

              <span className="pointer-events-none absolute inset-y-0 start-2 grid place-content-center text-xl">
                <MdOutlineCreditCard />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="expiry" className="block text-sm font-medium mb-1">
              Expiry date
            </label>
            <div className="relative">
              <input
                required
                type="number"
                id="expiry"
                autoComplete="cc-exp"
                placeholder="MM/YY"
                className="w-1/3 rounded-md border-2 border-customGray-800 pl-9 pr-5 text-sm py-2.5 focus:outline-none focus:border-customGray-600 focus:ring-customGray-600 focus:ring-1"
              />

              <span className="pointer-events-none absolute inset-y-0 start-2 grid place-content-center text-xl">
                <BiCalendar />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="cvv" className="block text-sm font-medium mb-1">
              CVV
            </label>
            <div className="flex gap-3 items-end">
              <input
                required
                type="password"
                id="cvv"
                autoComplete="cc-csc"
                placeholder="***"
                className="w-1/4 rounded-md border-2 border-customGray-800 p-2.5 text-sm focus:outline-none focus:border-customGray-600 focus:ring-customGray-600 focus:ring-1"
              />
              <RiInformation2Line className="inline-block text-2xl" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-base mb-3">Shipping address</h2>
          <div className="grid gap-3">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <div>
                <input
                  required
                  type="text"
                  id="name"
                  autoComplete="name"
                  className="w-full rounded-md border-2 border-customGray-800 p-2.5 text-sm focus:outline-none focus:border-customGray-600 focus:ring-customGray-600 focus:ring-1"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium mb-1">
                Address
              </label>
              <div>
                <input
                  required
                  type="text"
                  id="address"
                  autoComplete="street-address"
                  className="w-full rounded-md border-2 border-customGray-800 p-2.5 text-sm focus:outline-none focus:border-customGray-600 focus:ring-customGray-600 focus:ring-1"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone number
              </label>
              <div>
                <input
                  required
                 type="tel"
                 id="phone"
                  autoComplete="tel"
                  className="w-full rounded-md border-2 border-customGray-800 p-2.5 text-sm focus:outline-none focus:border-customGray-600 focus:ring-customGray-600 focus:ring-1"
                />
              </div>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-1">
                City
              </label>
              <div>
                <input
                  required
                  type="text"
                  id="city"
                  autoComplete="address-level2"
                  className="w-1/2 rounded-md border-2 border-customGray-800 p-2.5 text-sm focus:outline-none focus:border-customGray-600 focus:ring-customGray-600 focus:ring-1"
                />
              </div>
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium mb-1">
                State
              </label>
              <div>
                <input
                  required
                  type="text"
                  id="state"
                  autoComplete="address-level1"
                  className="w-1/2 rounded-md border-2 border-customGray-800 p-2.5 text-sm focus:outline-none focus:border-customGray-600 focus:ring-customGray-600 focus:ring-1"
                />
              </div>
            </div>

            <div>
              <label htmlFor="zip" className="block text-sm font-medium mb-1">
                Zip
              </label>
              <div>
                <input
                  required
                  type="number"
                  id="zip"
                  autoComplete="postal-code"
                  className="w-1/2 rounded-md border-2 border-customGray-800 p-2.5 text-sm focus:outline-none focus:border-customGray-600 focus:ring-customGray-600 focus:ring-1"
                />
              </div>
            </div>
          </div>
        </div>

        <Link className="mt-5 block text-center text-sm font-semibold bg-customGray-800 text-customGray-50 rounded-md py-2.5 px-4" to="/payment-success">Pay now</Link>   
      </form>

      <OrderSummary isCart={false} />
    </div>
  );
};

export default PaymentDetails;
