import { createContext, useEffect, useState } from "react";
import { NewProduct, Product } from "../types/types";
import { createProduct, fetchProducts } from "../services/products.service";

interface ContextProps {
  products: Product[];
  addProduct: (newProduct: NewProduct) => void;
}

const defaultValues: ContextProps = {
  products: [],
  addProduct: async () => {},
};

export const Context = createContext<ContextProps>(defaultValues);

interface ContextProviderProps {
  children: React.ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    fetchData();
  }, []);

  const addProduct = async (newProduct: NewProduct) => {
    try {
      const addedproduct = await createProduct(newProduct);
      setProducts([...products, addedproduct]);
    } catch (error) {
      console.log("Cannot add product", error);
    }
  };

  return (
    <Context.Provider value={{ products, addProduct }}>
      {children}
    </Context.Provider>
  );
};
