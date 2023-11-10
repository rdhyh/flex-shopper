import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";

const Products: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make an API request to fetch all products
    fetch("http://localhost:3000/api/products") // Replace with the actual URL of your backend
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <main className="container my-4">
      <h2>All Products</h2>
      <ProductList products={products} isHome={false} />
    </main>
  );
};

export default Products;
