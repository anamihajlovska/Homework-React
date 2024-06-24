export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface NewProduct {
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}
