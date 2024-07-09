import PageLabel from "../components/PageLabel"
import RadioButtons from "../components/RadioButtons"
import PaymentDetails from "../components/PaymentDetails"

const Checkout = () => {
  return (
    <section className="text-sm text-customGray-800">
        <PageLabel name="Checkout" page="/cart" />
        <div className="mt-5 border-b-2 border-customGray-400 pb-10">
          <h2 className="font-semibold text-base mb-3">Payment method</h2>
          
          <RadioButtons />
        </div>

        <div className="mt-5">
          <PaymentDetails />
        </div>
    </section>
  )
}

export default Checkout