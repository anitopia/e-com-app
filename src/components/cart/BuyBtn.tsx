"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/types";
import Button from "../layout/Button";

const BuyBtn = ({ id, title, ...product }: Product) => {
  const { products, addProduct, removeProduct, isInCart } = useCart();
  const count = products.filter((product) => product.id === id).length;

  return (
    <div className="flex gap-2">
      <Button
        className="flex-grow bg-purple-600 hover:bg-purple-700"
        onClick={() => addProduct({ id, title, ...product })}
        aria-label={`Add ${title} to cart`}
      >
        Add to cart {isInCart(id) && ` (${count})`}
      </Button>
      {isInCart(id) && (
        <Button
          className="bg-gray-600  hover:bg-gray-800"
          onClick={() => removeProduct(id)}
          aria-label={`Remove ${title} from cart`}
        >
          Remove
        </Button>
      )}
    </div>
  );
};

export default BuyBtn;
