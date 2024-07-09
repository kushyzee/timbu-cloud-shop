import React from 'react'

const PaymentDetails = () => {
  return (
    <div>
      <h2 className="font-semibold text-base mb-3">Payment method</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
      </form>
    </div>


    )
}

export default PaymentDetails