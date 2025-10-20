"use client";

import Button from "@/components/layout/Button";
import { useCart } from "@/context/CartContext";
import {
  getCartItems,
  getTotalDiscountedPrice,
  getTotalPrice,
} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cart = () => {
  const { products, removeProduct, clearCart } = useCart();
  const totalPrice = getTotalPrice(products);
  const totalDiscountedPrice = getTotalDiscountedPrice(products);
  const cartItems = getCartItems(products);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 max-w-5xl mx-auto">
      {/* Products List */}
      <div className="flex-1 space-y-4 bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {cartItems.map(({ id, title, price, thumbnail, count }) => (
          <div key={id} className="flex items-center ">
            <Link href={`/products/${id}`}>
              <Image
                src={thumbnail || "https://placehold.co/60x60"}
                alt={title + " image"}
                width={60}
                height={60}
              />
            </Link>
            <div className="ml-4 flex-grow">
              <h3 className="text-lg font-medium">
                <Link href={`/products/${id}`}>{title}</Link>
              </h3>
              <p className="text-gray-500">
                ${price} x {count}
              </p>
            </div>
            <div className="flex items-center space-x-3 mr-4">
              <span className="font-semibold">Total:</span>

              <span>${price * count}</span>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => removeProduct(id)}
                className="hover:text-gray-800 text-gray-600 p-0 w-6 rounded-full hover:cursor-pointer"
              >
                <Image src="/remove.svg" alt="Remove" width={24} height={24} />
              </button>
            </div>
          </div>
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

      <div className="w-full bg-white p-6 rounded-lg shadow h-fit md:w-64">
        <h3 className="text-xl font-semibold mb-4">Summary</h3>
        <div className="flex justify-between mb-2">
          <span>Total Items:</span>
          <span>{products.length}</span>
        </div>
        <div className="flex justify-between">
          <span>Total Price:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-medium mt-4 mb-6 border-t-2 pt-4 border-gray-600">
          <span>What you pay:</span>
          <span>${totalDiscountedPrice.toFixed(2)}</span>
        </div>
        <Button
          className="bg-purple-600 hover:bg-purple-800 w-full"
          onClick={() => clearCart()}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
