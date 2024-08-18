import React from "react";
import "./ProductCard.css";
import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";
const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <div className="product-actions">
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
