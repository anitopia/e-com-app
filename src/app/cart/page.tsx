"use client";

import Summary from "@/components/cart/Summary";
import Button from "@/components/layout/Button";
import ListItem from "@/components/product/ListItem";
import { useCart } from "@/context/CartContext";
import { getCartItems } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Cart = () => {
  const { products, removeProduct, clearCart } = useCart();
  const cartItems = getCartItems(products);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 max-w-5xl mx-auto">
      {/* Products List */}
      <div className="flex-1 space-y-4 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cartItems.map((item) => (
          <ListItem key={item.id} item={item} removeProduct={removeProduct} />
        ))}

        {products.length > 0 ? (
          <Button
            className="bg-gray-600  hover:bg-gray-800"
            onClick={() => clearCart()}
            aria-label={`Remove all items from cart`}
          >
            Clear Cart
          </Button>
        ) : (
          <>
            <p>Your cart is empty.</p>
            <Link href="/" className="font-extrabold text-purple-600">
              <span className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mr-2 text-purple-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0L2.586 11l3.707-3.707a1 1 0 111.414 1.414L5.414 11l2.293 2.293a1 1 0 010 1.414zM18 11a1 1 0 01-1 1H6a1 1 0 110-2h11a1 1 0 011 1z"
                    clipRule="evenodd"
                  />
                </svg>
                Go back to shopping
              </span>
            </Link>
          </>
        )}
      </div>

      <Summary products={products} clearCart={clearCart} />
    </div>
  );
};

export default Cart;
