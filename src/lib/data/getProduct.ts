import { notFound } from "next/navigation";
import { Product } from "../types";
import { stripData } from "../utils";

export async function getProduct(id: string): Promise<Product | null> {
  if (!id || Number.isNaN(Number(id))) {
    console.error(`Error: Invalid product id: ${id}`);
    return notFound();
  }
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return stripData(data) as Product;
}
