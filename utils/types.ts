// Navlink type
export type Navlink = {
  page: string;
  link: string;
};

// Product type
export type Product = {
  id: number;
  name_product: string;
  merek: string;
  price: number;
  desc_product: string;
  rating: string;
  size: Array<string>;
  thumbnail: string;
  images: Array<string>;
};
