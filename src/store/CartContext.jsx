import { createContext, useState } from "react";
import products from "../data/products.json";

export const CartContext = createContext({
  items: [],
  handleAddItemToCart: () => {},
  handleUpdateItemQuantity: () => {},
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

  const handleUpdateItemQuantity = (id, amount) => {
    setShoppingCart((prevState) => {
      const updatedItems = prevState.items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0);

      return { items: updatedItems };
    });
  };

  const CartValue = {
    items: shoopingCart.items,
    handleAddItemToCart,
    handleUpdateItemQuantity,
  };

  return (
    <CartContext.Provider value={CartValue}>{children}</CartContext.Provider>
  );
}
