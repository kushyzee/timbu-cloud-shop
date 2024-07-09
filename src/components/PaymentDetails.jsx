import { IoMdPerson } from "react-icons/io";
import { MdOutlineCreditCard } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { RiInformation2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const PaymentDetails = () => {
  return (
    <div>
      <h2 className="mb-3 text-base font-semibold">Payment details</h2>
      <form className="border-b-2 border-customGray-400 pb-12">
        <div className="mb-8 grid gap-3 border-b-2 border-customGray-400 pb-8">
          <div>
            <label
              htmlFor="cardName"
              className="mb-1 block text-sm font-medium"
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
              className="mb-1 block text-sm font-medium"
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
                className="w-full rounded-md border-2 border-customGray-800 py-2.5 pl-9 pr-5 text-sm focus:border-customGray-600 focus:outline-none focus:ring-1 focus:ring-customGray-600"
              />

              <span className="pointer-events-none absolute inset-y-0 start-2 grid place-content-center text-xl">
                <MdOutlineCreditCard />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="expiry" className="mb-1 block text-sm font-medium">
              Expiry date
            </label>
            <div className="relative">
              <input
                required
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
            <label htmlFor="cvv" className="mb-1 block text-sm font-medium">
              CVV
            </label>
            <div className="flex items-end gap-3">
              <input
                required
                type="password"
                id="cvv"
                autoComplete="cc-csc"
                placeholder="***"
                className="w-1/4 rounded-md border-2 border-customGray-800 p-2.5 text-sm focus:border-customGray-600 focus:outline-none focus:ring-1 focus:ring-customGray-600"
              />
              <RiInformation2Line className="inline-block text-2xl cursor-pointer" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-base font-semibold">Shipping address</h2>
          <div className="grid gap-3">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                Name
              </label>
              <div>
                <input
                  required
                  type="text"
                  id="name"
                  autoComplete="name"
                  className="w-full rounded-md border-2 border-customGray-800 p-2.5 text-sm focus:border-customGray-600 focus:outline-none focus:ring-1 focus:ring-customGray-600"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="address"
                className="mb-1 block text-sm font-medium"
              >
                Address
              </label>
              <div>
                <input
                  required
                  type="text"
                  id="address"
                  autoComplete="street-address"
                  className="w-full rounded-md border-2 border-customGray-800 p-2.5 text-sm focus:border-customGray-600 focus:outline-none focus:ring-1 focus:ring-customGray-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                Phone number
              </label>
              <div>
                <input
                  required
                  type="tel"
                  id="phone"
                  autoComplete="tel"
                  className="w-full rounded-md border-2 border-customGray-800 p-2.5 text-sm focus:border-customGray-600 focus:outline-none focus:ring-1 focus:ring-customGray-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="city" className="mb-1 block text-sm font-medium">
                City
              </label>
              <div>
                <input
                  required
                  type="text"
                  id="city"
                  autoComplete="address-level2"
                  className="w-1/2 rounded-md border-2 border-customGray-800 p-2.5 text-sm focus:border-customGray-600 focus:outline-none focus:ring-1 focus:ring-customGray-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="state" className="mb-1 block text-sm font-medium">
                State
              </label>
              <div>
                <input
                  required
                  type="text"
                  id="state"
                  autoComplete="address-level1"
                  className="w-1/2 rounded-md border-2 border-customGray-800 p-2.5 text-sm focus:border-customGray-600 focus:outline-none focus:ring-1 focus:ring-customGray-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="zip" className="mb-1 block text-sm font-medium">
                Zip
              </label>
              <div>
                <input
                  required
                  type="number"
                  id="zip"
                  autoComplete="postal-code"
                  className="w-1/2 rounded-md border-2 border-customGray-800 p-2.5 text-sm focus:border-customGray-600 focus:outline-none focus:ring-1 focus:ring-customGray-600"
                />
              </div>
            </div>
          </div>
        </div>

        <Link
          className="mt-5 block rounded-md bg-customGray-800 px-4 py-2.5 text-center text-sm font-semibold text-customGray-50"
          to="/payment/success"
        >
          Pay now
        </Link>
      </form>
    </div>
  );
};

export default PaymentDetails;
