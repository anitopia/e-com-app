import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import BuyBtn from "@/components/cart/BuyBtn";
import { getProduct } from "@/lib/data/getProduct";
import { Product } from "@/lib/types";
import { discountedPrice } from "@/lib/utils";
import Rating from "@/components/product/Rating";

async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  // Fetch product data based on the id from the URL - SSR
  const product: Product | null = await getProduct(id);
  const {
    title,
    description,
    price = 0,
    discountPercentage = 0,
    images = [],
    rating,
  } = product || {};

  if (!product?.id) {
    console.error(`Product with id ${id} not found`);
    return notFound();
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-md">
        <Image
          src={images[0] || "https://placehold.co/300x300"}
          alt={title || "Product Image"}
          className="w-full rounded-lg"
          width={300}
          height={300}
        />
        <div className="md:ml-4 flex flex-col gap-5 p-8">
          <h1 className="text-3xl font-bold">{title}</h1>
          <div className="text-right w-full">
            <Rating rating={rating} />
          </div>
          <p className="mt-2 text-gray-600">{description}</p>
          <div className="text-lg font-semibold text-gray-800 flex justify-between mb-4 ">
            {discountPercentage > 0 ? (
              <>
                <p>
                  Price: <span className="line-through">${price}</span>{" "}
                  <span className="text-red-700">
                    ${discountedPrice(price, discountPercentage)}
                  </span>
                </p>
                <span className="bg-red-700 rounded-2xl px-3 py-2 -mt-2 font-semibold text-white text-sm">
                  {discountPercentage}%
                </span>
              </>
            ) : (
              <p>Price: ${price}</p>
            )}
          </div>
          <BuyBtn {...product} />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
