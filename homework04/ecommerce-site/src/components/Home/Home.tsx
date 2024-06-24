import { useContext } from "react";
import { Context } from "../../context/context";
import { ProductCard } from "../ProductCard/ProductCard";

export const Home = () => {
  const context = useContext(Context);
  const { products } = context;
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
