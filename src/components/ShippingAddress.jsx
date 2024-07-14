import React from "react";
import { useState } from "react";

const ShippingAddress = ({ customerDetails, handleChange }) => {
  return (
    <div>
      <h2 className="mb-3 text-base font-semibold md:text-xl">
        Shipping address
      </h2>
      <div className="grid gap-3 md:gap-5">
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-medium md:text-base"
          >
            Name
          </label>
          <div>
            <input
              required
              name="name"
              type="text"
              id="name"
              autoComplete="name"
              value={customerDetails.name}
              onChange={handleChange}
              className="w-full rounded-md border-2 border-customGray-800 p-2.5 text-sm focus:border-customGray-600 focus:outline-none focus:ring-1 focus:ring-customGray-600"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="address"
            className="mb-1 block text-sm font-medium md:text-base"
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
          <label
            htmlFor="phone"
            className="mb-1 block text-sm font-medium md:text-base"
          >
            Phone number
          </label>
          <div>
            <input
              required
              name="phone"
              type="tel"
              id="phone"
              autoComplete="tel"
              value={customerDetails.phone}
              onChange={handleChange}
              className="w-full rounded-md border-2 border-customGray-800 p-2.5 text-sm focus:border-customGray-600 focus:outline-none focus:ring-1 focus:ring-customGray-600"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium md:text-base"
          >
            Email
          </label>
          <div>
            <input
              required
              name="email"
              type="tel"
              id="email"
              autoComplete="email"
              value={customerDetails.email}
              onChange={handleChange}
              className="w-full rounded-md border-2 border-customGray-800 p-2.5 text-sm focus:border-customGray-600 focus:outline-none focus:ring-1 focus:ring-customGray-600"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="city"
            className="mb-1 block text-sm font-medium md:text-base"
          >
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
          <label
            htmlFor="state"
            className="mb-1 block text-sm font-medium md:text-base"
          >
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
          <label
            htmlFor="zip"
            className="mb-1 block text-sm font-medium md:text-base"
          >
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
  );
};

export default ShippingAddress;
