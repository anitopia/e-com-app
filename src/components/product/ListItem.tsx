import { CartItem } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  item: CartItem;
  removeProduct: (id: number) => void;
}

const ListItem = ({ item, removeProduct }: Props) => {
  const { id, title, thumbnail, price, count } = item;

  return (
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
  );
};

export default ListItem;
