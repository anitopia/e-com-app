import React from "react";
import Button from "../layout/Button";
import { getTotalDiscountedPrice, getTotalPrice } from "@/lib/utils";
import { Product } from "@/lib/types";

const Summary = ({
  products,
  clearCart,
}: {
  products: Product[];
  clearCart: () => void;
}) => {
  const totalPrice = getTotalPrice(products);
  const totalDiscountedPrice = getTotalDiscountedPrice(products);
  return (
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
  );
};

export default Summary;
