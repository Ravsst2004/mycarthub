import { createContext, useState } from "react";
import products from "../data/products.json";

export const CartContext = createContext({
  items: [],
  handleAddItemToCart: () => {},
});

export default function CartContextProvider({ children }) {
  const [shoopingCart, setShoppingCart] = useState({
    items: [],
  });

  const handleAddItemToCart = (id) => {
    setShoppingCart((prevState) => {
      const updatedItems = [...prevState.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (item) => item.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = products.find((product) => product.id === id);

        updatedItems.push({
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: 1,
        });
      }

      return { items: updatedItems };
    });
  };

  const CartValue = {
    items: shoopingCart.items,
    handleAddItemToCart,
  };

  return (
    <CartContext.Provider value={CartValue}>{children}</CartContext.Provider>
  );
}
