import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import "./Home.css";
import backgroundImage from "./image/girl1.jpeg";
import backgroundImage2 from "./image/girl2.jpeg";

const Home: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make an API request to fetch products from the backend
    fetch("http://localhost:3000/api/products") // Replace with the actual URL of your backend
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const column1Styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const column1Styles2 = {
    backgroundImage: `url(${backgroundImage2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  // Limit the number of products to display to the first six
  const limitedProducts = products.slice(0, 6);

  return (
    <main className="container my-4 custom-home">
      <div className="row">
        <div className="col-md-4" style={column1Styles}>
          <section className="mb-4"></section>
        </div>
        <div className="col-md-4 custom-column">
          <section className="mb-4">
            <h2>Featured Products</h2>
            <ProductList products={limitedProducts} />{" "}
            {/* Use the sliced products data */}
          </section>
        </div>
        <div className="col-md-4" style={column1Styles2}>
          <section className="mb-4"></section>
        </div>
      </div>
    </main>
  );
};

export default Home;
