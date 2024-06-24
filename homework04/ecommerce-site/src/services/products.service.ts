import { NewProduct } from "../types/types";

export const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching products", error);
  }
};

export const createProduct = async (newProduct: NewProduct) => {
  const productCreationProps = (newProduct = {
    title: newProduct.title,
    price: newProduct.price,
    image: newProduct.image,
    category: newProduct.category,
    description: newProduct.description,
  });

  const response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productCreationProps),
  });

  const data = await response.json();
  return data;
};
