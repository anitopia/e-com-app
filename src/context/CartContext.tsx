"use client";
import { Product } from "@/lib/types";
import { createContext, useContext, useState, ReactNode } from "react";

interface CartContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  isInCart: (id: number) => boolean;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);

  const isInCart = (id: number) => {
    return products.some((item) => item.id === id);
  };

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  const removeProduct = (id: number) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setProducts([]);
  };

  return (
    <CartContext.Provider
      value={{ products, addProduct, removeProduct, isInCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider component");
  }
  return context;
}
