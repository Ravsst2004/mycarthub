import { IoBagOutline } from "react-icons/io5";
import { CartContext } from "../store/CartContext";
import { useContext } from "react";

export default function Navbar({ openModal }) {
  const { items } = useContext(CartContext);

  return (
    <nav className="flex items-center justify-between p-4 text-2xl text-[#EDBF68]">
      <h1 className="font-bold">MyCartHub</h1>
      <div className="relative cursor-pointer" onClick={openModal}>
        {items.length > 0 && (
          <div className="absolute left-3 bottom-2">
            <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
              {items.length}
            </p>
          </div>
        )}
        <IoBagOutline />
      </div>
    </nav>
  );
}
