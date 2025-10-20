"use client";

import Image from "next/image";
import React from "react";
import Rating from "./Rating";
import Link from "next/link";
import AddToCartBtn from "../cart/BuyBtn";
import { Product } from "@/lib/types";

export default function Card({ product }: { product: Product }) {
  const { id, thumbnail, title, price, rating } = product;

  return (
    <div className="text-left shadow-md p-4 rounded-lg border border-gray-200 bg-white flex flex-col justify-between ">
      <Link href={`/products/${id}`}>
        <Image
          src={thumbnail || "https://placehold.co/200x200"}
          alt={title}
          width={200}
          height={200}
          className="w-full rounded-lg object-cover mb-4 max-w-50 mx-auto"
        />
        <div>
          <h3 className="text-md font-bold text-gray-700 mt-2">{title}</h3>
          <Rating rating={rating} />
          <div className="text-gray-900 font-extrabold text-base">{price}</div>
        </div>
      </Link>
      <AddToCartBtn {...product} />
    </div>
  );
}
