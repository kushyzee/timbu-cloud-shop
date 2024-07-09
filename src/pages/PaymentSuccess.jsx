import { Link } from "react-router-dom"
import { MdCheckCircle } from "react-icons/md";

const PaymentSuccess = () => {
  return (
    <section>
      <div className="flex flex-col items-center border-2 border-customGray-400 rounded-lg py-10 px-5 max-w-md mx-auto my-24">
        <MdCheckCircle className="text-[130px] text-customTeal" />
        <h1 className="text-xl my-5 font-semibold">Payment Successful!</h1>
        <p className="text-sm font-semibold mb-2">You have successfully placed your order</p>
        <a href="https://www.google.com" className="text-sm text-customGray-600 underline">View tracking details</a>

        <Link to="/" className="mt-10 block rounded-md bg-customGray-800 px-5 py-2.5 text-center text-base font-semibold text-customGray-50">Back to Shop</Link>
      </div>
    </section>
  )
}

export default PaymentSuccess