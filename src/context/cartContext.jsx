import { createContext, useState, useContext } from "react";

const CartContext = createContext({
  product: [],
  addToCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  const addToCart = (cart) => {
    setProduct((prevState) => [...prevState, cart]);
  };

  return (
    <CartContext.Provider value={{ product, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
