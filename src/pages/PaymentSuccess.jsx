import { Link } from "react-router-dom"
const PaymentSuccess = () => {
  return (
    <section>
      <div>
        <h1>Payment Successful!</h1>
        <p>You have successfully placed your order</p>
        <a href="https://www.google.com">View tracking details</a>

        <Link to="/">Back to Shop</Link>
      </div>
    </section>
  )
}

export default PaymentSuccess