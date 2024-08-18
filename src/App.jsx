import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import "./App.css";

export default function App() {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <div align="center">
      <Navbar />
      <h1>Home Page</h1>
      <div className="product-container">
        {products ? (
          products.map((product) => <ProductCard product={product} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
