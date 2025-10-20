export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  discountPercentage: number;
  rating: number;
  thumbnail: string;
}

export interface CartItem extends Product {
  count: number;
}
