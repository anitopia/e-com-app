import { stripData } from "../utils";
import { Product } from "../types";

const categorizedProducts = (products: Product[]) =>
  products.reduce((acc, product) => {
    const category = product.category || "uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(stripData(product));
    return acc;
  }, {} as Record<string, Product[]>);

export const getProducts = async (): Promise<Record<
  string,
  Product[]
> | null> => {
  const res = await fetch(`https://dummyjson.com/products`);

  if (!res.ok) {
    console.error(`Error: Failed to fetch products: ${res.statusText}`);
    return null;
  }

  const data = (await res.json()) as { products: Product[] };

  if (!data.products) {
    console.error(`Error: No products found`);
    return null;
  }

  return categorizedProducts(data.products);
};
