"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

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

  return { cartItems, setCartItems, addToCart, removeFromCart, updateQuantity };
}

export const CartProvider = ({ children }) => {
  const cart = useCart();
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
