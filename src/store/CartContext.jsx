import { createContext, useReducer, useState } from "react";
import products from "../data/products.json";

export const CartContext = createContext({
  items: [],
  handleAddItemToCart: () => {},
  handleUpdateItemQuantity: () => {},
});

const shoopingCartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = products.find((product) => product.id === action.id);

      updatedItems.push({
        id: action.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1,
      });
    }

    return { items: updatedItems };
  }

  if (action.type === "UPDATE_ITEM") {
    const updatedItems = state.items
      .map((item) =>
        item.id === action.id
          ? { ...item, quantity: item.quantity + action.amount }
          : item
      )
      .filter((item) => item.quantity > 0);

    return { items: updatedItems };
  }
};

export default function CartContextProvider({ children }) {
  const [shoopingCartState, shoopingCartDispatch] = useReducer(
    shoopingCartReducer,
    {
      items: [],
    }
  );

  const handleAddItemToCart = (id) => {
    shoopingCartDispatch({
      type: "ADD_ITEM",
      id: id,
    });
  };

  const handleUpdateItemQuantity = (id, amount) => {
    shoopingCartDispatch({
      type: "UPDATE_ITEM",
      id: id,
      amount: amount,
    });
  };

  const CartValue = {
    items: shoopingCartState.items,
    handleAddItemToCart,
    handleUpdateItemQuantity,
  };

  return (
    <CartContext.Provider value={CartValue}>{children}</CartContext.Provider>
  );
}
