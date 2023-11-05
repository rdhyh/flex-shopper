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

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <ProductCard
            image_url={product.image_url} // Corrected from product.image_url
            name={product.name}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
