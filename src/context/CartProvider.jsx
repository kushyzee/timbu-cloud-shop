import React, { useReducer, createContext, useEffect } from "react";

const CartContext = createContext();
const SHIPPING_FEE = 2000;

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  totalItems: JSON.parse(localStorage.getItem("totalItems")) || 0,
  subtotal: JSON.parse(localStorage.getItem("subtotal")) || 0,
  total: JSON.parse(localStorage.getItem("total")) || 0,
  shippingFee: SHIPPING_FEE,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        const updateCart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        const updatedSubtotal = state.subtotal + action.payload.price;
        return {
          ...state,
          cart: updateCart,
          totalItems: state.totalItems + 1,
          subtotal: updatedSubtotal,
          total: updatedSubtotal + SHIPPING_FEE,
        };
      } else {
        const updatedCart = [...state.cart, action.payload];
        const updatedSubtotal = state.subtotal + action.payload.price;
        return {
          ...state,
          cart: updatedCart,
          totalItems: state.totalItems + 1,
          subtotal: updatedSubtotal,
          total: updatedSubtotal + SHIPPING_FEE,
        };
      }

    case "REMOVE_FROM_CART":
      const itemToRemove = state.cart.find(
        (item) => item.id === action.payload,
      );
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload,
      );
      const subtotalAfterRemoval =
        state.subtotal - itemToRemove.price * itemToRemove.quantity;
        
      return {
        ...state,
        cart: filteredCart,
        totalItems: state.totalItems - itemToRemove.quantity,
        subtotal: subtotalAfterRemoval,
        total: subtotalAfterRemoval + SHIPPING_FEE,
      };

    case "INCREASE_QUANTITY":
      const increasedCart = state.cart.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      const increasedItem = state.cart.find(
        (item) => item.id === action.payload,
      );
      const subtotalAfterIncrease = state.subtotal + increasedItem.price;

      return {
        ...state,
        cart: increasedCart,
        totalItems: state.totalItems + 1,
        subtotal: subtotalAfterIncrease,
        total: subtotalAfterIncrease + SHIPPING_FEE,
      };

    case "DECREASE_QUANTITY":
      const decreasedCart = state.cart.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
      const decreasedItem = state.cart.find(
        (item) => item.id === action.payload,
      );
      const subtotalAfterDecrease = state.subtotal - decreasedItem.price;

      return {
        ...state,
        cart: decreasedCart,
        totalItems: state.totalItems - 1,
        subtotal: subtotalAfterDecrease,
        total: subtotalAfterDecrease + SHIPPING_FEE,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        totalItems: 0,
        subtotal: 0,
        total: 0,
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
    localStorage.setItem("subtotal", JSON.stringify(state.subtotal));
    localStorage.setItem("total", JSON.stringify(state.total));

    if (state.cart.length === 0) {
      localStorage.removeItem("cart");
      localStorage.removeItem("totalItems");
      localStorage.removeItem("subtotal");
      localStorage.removeItem("total");
    }
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
