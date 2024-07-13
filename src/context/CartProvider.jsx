import React, { useReducer, createContext, useEffect } from "react";

const CartContext = createContext();
const SHIPPING_FEE = 2000;

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  totalItems: JSON.parse(localStorage.getItem("totalItems")) || 0,
  subtotal: JSON.parse(localStorage.getItem("subtotal")) || 0,
  total: JSON.parse(localStorage.getItem("total")) || 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        const updateCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1} : item)
            const updatedSubtotal = state.subtotal + action.payload.price;
            return {
              ...state,
              cart: updateCart,
              totalItems: state.totalItems + 1,
              subtotal: updatedSubtotal,
              total: updatedSubtotal + SHIPPING_FEE,
            }
      } else {
        const updatedCart = [...state.cart, action.payload];
        const updatedSubtotal = state.subtotal + action.payload.price;
        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems + 1,
          subtotal: updatedSubtotal,
          total: updatedSubtotal + SHIPPING_FEE
        }
      }

      case "REMOVE_FROM_CART":
        const itemToRemove = state.cart.find(item => item.id === action.payload)

  }
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
    localStorage.setItem("subtotal", JSON.stringify(state.subtotal));
    localStorage.setItem("total", JSON.stringify(state.total));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export {CartProvider, CartContext};