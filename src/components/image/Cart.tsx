// Cart.js
import React from "react";
import { useCart } from "../CartContext"; // Import your CartContext

const Cart = () => {
  const { state } = useCart();

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {state.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <p>Total: $0.00</p> {/* Implement total calculation */}
    </div>
  );
};

export default Cart;
