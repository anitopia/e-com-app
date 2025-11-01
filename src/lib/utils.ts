import { CartItem, Product } from "./types";

/** Utility function to strip unneeded fields from the Product data.
 * Cart Context currently stores all the data as is but if the data needed in the product page
 * and cart summary page varies by a lot it would be better to strip the data even further
 * in the cart context where we are adding new items to a smaller subset*/
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

export const getTotalPrice = (products: CartItem[]) =>
  products.reduce((sum, p) => sum + p.price * p.count, 0).toFixed(2);

export const getTotalDiscountedPrice = (products: CartItem[]) =>
  products
    .reduce(
      (sum, p) => sum + Number(discountedPrice(p.price, p.discountPercentage)),
      0
    )
    .toFixed(2);

export const getTotalCount = (products: CartItem[]) =>
  products.reduce((sum, p) => sum + p.count, 0);
