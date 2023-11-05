import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import "./Categories.css"; // Import your CSS file

const Categories: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products/categories/Woman")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products by category:", error);
      });
  }, []);

  return (
    <main className="container my-4">
      <h2>Woman Category</h2>
      <ProductList products={products} />
    </main>
  );
};

export default Categories;
