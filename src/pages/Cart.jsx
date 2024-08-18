import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";
const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <h1>
      {cart.length > 0 ? (
        <div>
          <h4>Number of products: {cart.length}</h4>
          <h4>
            Product Names:{" "}
            {cart.map((product) => (
              <ul>
                <li>{product.title}</li>
                <button onClick={() => removeFromCart(product)}>Remove</button>
              </ul>
            ))}
          </h4>
        </div>
      ) : (
        <h1>Cart is empty</h1>
      )}
    </h1>
  );
};

export default Cart;
