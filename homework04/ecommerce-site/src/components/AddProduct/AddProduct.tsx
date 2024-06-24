import { useContext, useState, ChangeEvent, FormEvent } from "react";
import { Context } from "../../context/context";
import { NewProduct } from "../../types/types";
import "./AddProduct.css";

export const AddProduct = () => {
  const context = useContext(Context);
  const [newProduct, setNewProduct] = useState<NewProduct>({
    title: "",
    price: 0,
    description: "",
    image: "",
    category: "",
  });

  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setNewProduct({
      title: "",
      price: 0,
      description: "",
      image: "",
      category: "",
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    context.addProduct(newProduct);
    resetForm();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={newProduct.title}
        onChange={handleInputChange}
        required
      />

      <label>Price:</label>
      <input
        type="number"
        name="price"
        value={newProduct.price}
        onChange={handleInputChange}
        required
      />

      <label>Description:</label>
      <textarea
        name="description"
        value={newProduct.description}
        onChange={handleInputChange}
        required
      />

      <label>Image URL:</label>
      <input
        type="text"
        name="image"
        value={newProduct.image}
        onChange={handleInputChange}
        required
      />

      <label>Category:</label>
      <select
        name="category"
        value={newProduct.category}
        onChange={handleInputChange}
        required
      >
        <option value="">Select category</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      <button type="submit">Add Product</button>
    </form>
  );
};
