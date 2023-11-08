import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import "./Categories.css"; // Import your CSS file

const Categories: React.FC = () => {
  const [womanProducts, setWomanProducts] = useState([]);
  const [manProducts, setManProducts] = useState([]);
  const [mixedProducts, setMixedProducts] = useState([]);

  useEffect(() => {
    // Fetch products for the "Woman" category
    fetch("http://localhost:3000/api/products/categories/Woman")
      .then((response) => response.json())
      .then((data) => {
        setWomanProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products for Woman category:", error);
      });

    // Fetch products for the "Man" category
    fetch("http://localhost:3000/api/products/categories/Man")
      .then((response) => response.json())
      .then((data) => {
        setManProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products for Man category:", error);
      });

    // Fetch products for the "Mixed" category (if needed)
    // Replace the URL with the actual endpoint for the mixed category
    fetch("http://localhost:3000/api/products/categories/Mixed")
      .then((response) => response.json())
      .then((data) => {
        setMixedProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products for Mixed category:", error);
      });
  }, []);

  return (
    <main className="container my-4">
      <div className="row">
        <div className="column-md-4">
          <h2>Woman Category</h2>
          <ProductList products={womanProducts} />
        </div>
        <div className="column-md-4">
          <h2>Man Category</h2>
          <ProductList products={manProducts} />
        </div>
        <div className="column-md-4">
          <h2>Mixed Category</h2>
          <ProductList products={mixedProducts} />
        </div>
      </div>
    </main>
  );
};

export default Categories;
