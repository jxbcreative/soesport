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
  price: string;
  desc_product: string;
  rating: string;
  size: Array<string>;
  thumbnail: string;
  images: Array<string>;
};

export type Service = {
  title : string;
  content: string;
  icon: string;
}

export type SocialMedia = {
  icon: string;
  link: string;
}
