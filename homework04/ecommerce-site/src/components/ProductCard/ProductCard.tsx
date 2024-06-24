import { Product } from "../../types/types";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
    </div>
  );
};
