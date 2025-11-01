/**
 * Cart context and hook for managing the list of products in a client-side shopping cart.
 *
 * This module provides a React Context-based API to read and mutate a cart represented as an array of Product items.
 * It is intended to be used in client components where stateful cart behavior is required.
 * The cart supports adding products, removing products by ID, checking for product existence,
 * and clearing the entire cart.
 */
"use client";
import { CartItem, Product } from "@/lib/types";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface CartContextType {
  products: CartItem[];
  handleCart: (product: Product, count?: number) => void;
  isInCart: (id: number) => boolean;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<CartItem[]>([]);
  // Load cart items from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setProducts(JSON.parse(storedCart));
    }
  }, []);
  // Persist cart items to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(products));
  }, [products]);

  // Check if a product with the given id exists in the cart.
  const isInCart = (id: number) => {
    return products.some((item) => item.id === id);
  };

  /**  Handle adding, updating, or removing a product in the cart.
   * The product is added or updated with the specified count.
   * If count is zero or less, the product is removed from the cart.
   */
  const handleCart = (product: Product, count = 1) => {
    if (count < 1) {
      // Remove the product from the cart.
      setProducts((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      // If the product exists, update its count. Otherwise, add it to the cart.
      setProducts((prev) =>
        isInCart(product.id)
          ? prev.map((item) =>
              item.id === product.id ? { ...item, count } : item
            )
          : [...prev, { ...product, count: 1 }]
      );
    }
  };

  const clearCart = () => {
    setProducts([]);
  };

  return (
    <CartContext.Provider value={{ products, handleCart, isInCart, clearCart }}>
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
