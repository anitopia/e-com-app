import React, { useMemo } from "react";
import Button from "../layout/Button";
import {
  getTotalDiscountedPrice,
  getTotalPrice,
  getTotalCount,
} from "@/lib/utils";
import { CartItem } from "@/lib/types";

const Summary = ({
  products,
  clearCart,
}: {
  products: CartItem[];
  clearCart: () => void;
}) => {
  // Avoid recalculating totals on every render unless products in cart change
  const [totalPrice, totalDiscountedPrice, totalCount] = useMemo(
    () => [
      getTotalPrice(products),
      getTotalDiscountedPrice(products),
      getTotalCount(products),
    ],
    [products]
  );
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow h-fit md:w-64">
      <h3 className="text-xl font-semibold mb-4">Summary</h3>
      <div className="flex justify-between mb-2">
        <span>Total Items:</span>
        <span>{totalCount}</span>
      </div>
      <div className="flex justify-between">
        <span>Total Price:</span>
        <span>${totalPrice}</span>
      </div>
      <div className="flex justify-between text-lg font-medium mt-4 mb-6 border-t-2 pt-4 border-gray-600">
        <span>What you pay:</span>
        <span>${totalDiscountedPrice}</span>
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
