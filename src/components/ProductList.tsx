import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  image_url: string; // Change from image_url to image
  name: string;
  price: string;
}

interface ProductListProps {
  products: Product[];
}

interface ProductListProps {
  products: Product[];
  isHome: boolean; // Add the isHome prop
}

const ProductList: React.FC<ProductListProps> = ({ products, isHome }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div
          className={`col-md-4 mb-4 ${
            isHome ? "home-product-card" : "category-product-card"
          }`}
          key={product.id}
        >
          <ProductCard
            image_url={product.image_url}
            name={product.name}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
