"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCart } from "@/context/CartContext";

const CartBtn = () => {
  const { products } = useCart();
  return (
    <Link
      href="/cart"
      className="group -m-2 flex items-center p-2 hover:bg-gray-600 rounded-md"
    >
      <Image src="/cart.svg" alt="Cart" width={20} height={20} />
      <span className="text-md ml-1 font-semibold">{products.length}</span>
      <span className="sr-only"> items in cart</span>
    </Link>
  );
};

export default CartBtn;
