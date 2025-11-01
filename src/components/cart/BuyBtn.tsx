"use client";

import React, { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/types";
import Button from "../layout/Button";

const BuyBtn = (product: Product) => {
  const { id, title } = product;
  const [count, setCount] = useState(0);
  const { products, handleCart, isInCart } = useCart();

  useEffect(() => {
    setCount(products.find((prod) => prod.id === id)?.count || 0);

    return () => {
      setCount(0);
    };
  }, [id, products]);

  return (
    <div className="flex gap-2 justify-between mt-2">
      {isInCart(id) ? (
        <>
          <Button
            className="flex-grow bg-purple-600 hover:bg-purple-700"
            onClick={() => handleCart(product, count + 1)}
            aria-label={`Add ${title} to cart`}
          >
            +
          </Button>
          <input
            type="number"
            value={count}
            className="border border-gray-300 rounded-md p-1 w-16 text-center"
            onChange={(e) => handleCart(product, Number(e.target.value))}
          />
          <Button
            className="flex-grow bg-gray-600 hover:bg-gray-800 px-3"
            onClick={() => handleCart(product, count - 1)}
            aria-label={`Remove ${title} from cart`}
          >
            -
          </Button>
        </>
      ) : (
        <Button
          className="flex-grow bg-purple-600 hover:bg-purple-700"
          onClick={() => handleCart(product, count + 1)}
          aria-label={`Add ${title} to cart`}
        >
          Add
        </Button>
      )}
    </div>
  );
};

export default BuyBtn;
