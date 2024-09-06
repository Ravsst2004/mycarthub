import { useContext, useRef } from "react";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CartContextProvider, { CartContext } from "./store/CartContext";

export default function App() {
  const modalDialog = useRef();
  const { items, handleUpdateItemQuantity } = useContext(CartContext);

  const openModal = () => {
    modalDialog.current.open();
  };

  const total = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const cartBox = (
    <div className="flex flex-col gap-2 w-60 sm:w-96">
      <h1 className="text-3xl font-bold text-yellow-50">Your Cart</h1>
      {items && items.length > 0 ? (
        items.map((item) => (
          <div
            key={item.id}
            className="bg-[#FBD392] p-2 rounded flex justify-between"
          >
            <h1>{item.name}</h1>
            <div className="flex justify-between gap-2">
              <button onClick={() => handleUpdateItemQuantity(item.id, -1)}>
                -
              </button>
              <p>{item.quantity}</p>
              <button onClick={() => handleUpdateItemQuantity(item.id, +1)}>
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-lg">No items in cart</p>
      )}
      <p className="text-end">Total: ${total}</p>
    </div>
  );

  return (
    <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
      <Modal ref={modalDialog}>{cartBox}</Modal>
      <Navbar openModal={openModal} />
      <Products />
    </div>
  );
}
