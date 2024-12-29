"use client";

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "XX99 MK II",
      price: 2999,
      quantity: 1,
      image: "/path-to-image.jpg",
    },
    {
      id: 2,
      name: "XX59",
      price: 899,
      quantity: 2,
      image: "/path-to-image.jpg",
    },
    {
      id: 3,
      name: "YX1",
      price: 599,
      quantity: 1,
      image: "/path-to-image.jpg",
    },
  ]);

  function addToCart(item) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prevItems, { ...item, quantity: item.quantity }];
    });
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function updateQuantity(id, quantity) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  }

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
