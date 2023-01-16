export type Product = {
  sku: string;
  name: string;
  category: string;
  price: number;
  slug:string
};

export type Category = {
  name: string;
  slug: string;
  description: string;
};