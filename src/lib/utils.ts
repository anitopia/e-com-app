import { CartItem, Product } from "./types";

// We dont need all the data from the API, so we strip it down to whats needed
export const stripData = (data: Product): Product => ({
  id: data.id,
  title: data.title,
  price: data.price,
  description: data.description,
  category: data.category,
  images: data.images,
  discountPercentage: data.discountPercentage,
  rating: data.rating,
  thumbnail: data.thumbnail,
});

export const discountedPrice = (
  price: number,
  discountPercentage: number
): string => ((price * (100 - discountPercentage)) / 100).toFixed(2);

export const getTotalPrice = (products: Product[]) =>
  products.reduce((sum, p) => sum + p.price, 0);

export const getTotalDiscountedPrice = (products: Product[]) =>
  products.reduce(
    (sum, p) => sum + Number(discountedPrice(p.price, p.discountPercentage)),
    0
  );

export const getCartItems = (products: Product[]) =>
  products.reduce((acc, product) => {
    const existing = acc.find((item) => item.id === product.id);
    if (!existing) {
      acc.push({ ...product, count: 1 });
    } else {
      existing.count += 1;
    }
    return acc;
  }, [] as CartItem[]);
