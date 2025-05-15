import { createContext, useState, useContext } from "react";

const CartContext = createContext({
  product: [],
  addToCart: () => {},
  removeFromCart: () => {},
  total: 0,
});

export const CartContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  const addToCart = (item) => {
    setProduct((prev) => {
      const existingItem = prev.find((p) => p.name === item.name);
      if (existingItem) {
        return prev.map((p) =>
          p.name === item.name ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (name) => {
    setProduct((prev) =>
      prev
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = product.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ product, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

