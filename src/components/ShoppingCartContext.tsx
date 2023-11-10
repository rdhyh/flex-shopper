// ShoppingCartContext.js
import { createContext, useContext, useReducer } from "react";

const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        // Add the product to the shopping cart
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      // Add other cases for cart management (e.g., remove from cart)
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShoppingCartContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
