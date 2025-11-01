"use client";

import { CartItem, Product } from "@/lib/types";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

/**
 * Cart context and hook for managing the list of products in a client-side shopping cart.
 *
 * The cart supports adding, updating, or removing a product in the cart, checking if it is already in the cart,
 * and clearing the entire cart.
 */
export interface CartContextType {
  products: CartItem[];
  /**  Adding, updating, or removing a product in the cart.
   * The product is added or updated with a positive number and
   * if it is zero or less, the product is removed from the cart.
   */
  handleCart: (product: Product, count?: number) => void;
  /** Check if a product with the given id exists in the cart. */
  isInCart: (id: number) => boolean;
  /** Clear all products from the cart. */
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

  const isInCart = (id: number) => {
    return products.some((item) => item.id === id);
  };

  const handleCart = (product: Product, count = 1) => {
    if (count < 1) {
      setProducts((prev) => prev.filter((item) => item.id !== product.id));
    } else {
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
