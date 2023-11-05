import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Import the cart icon
import "./ProductCard.css"; // Import a CSS file for your component styles

interface ProductCardProps {
  image_url: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image_url,
  name,
  price,
}) => {
  return (
    <div className="card mb-4">
      <img src={image_url} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        <a href="#" className="btn btn-primary">
          <FontAwesomeIcon icon={faShoppingCart} /> {/* Add the cart icon */}
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
