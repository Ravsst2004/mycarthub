import { useRef } from "react";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

export default function App() {
  const modalDialog = useRef();

  const openModal = () => {
    modalDialog.current.open();
  };

  const cartBox = (
    <div className="flex flex-col gap-2 w-96">
      <h1 className="text-3xl font-bold text-yellow-50">Your Cart</h1>
      <p className="text-lg">No Items in cart</p>
      <div className="bg-[#FBD392] p-2 rounded flex justify-between">
        <h1>Classic blue gown</h1>
        <div className="flex justify-between gap-2">
          <button>+</button>
          <p>1</p>
          <button>-</button>
        </div>
      </div>
      <p className="text-end">Total: $0</p>
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
