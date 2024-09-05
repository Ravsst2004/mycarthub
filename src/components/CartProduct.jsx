import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function CartProduct({ product }) {
  const { handleAddItemToCart } = useContext(CartContext);

  return (
    <div className="shadow-lg">
      <img src={product.image} alt={product.name} className="rounded-t-lg" />
      <div className="flex flex-col gap-1 px-2 py-4 bg-[#5F4E33] rounded-b-lg">
        <h1 className="font-bold text-yellow-200 text-xl">{product.name}</h1>
        <p className="text-yellow-100">${product.price}</p>
        <p className="text-yellow-50 text-justify">{product.description}</p>
        <p
          onClick={() => handleAddItemToCart(product.id)}
          className="flex justify-end mt-4"
        >
          <button className="text-black font-semibold bg-[#f9bd5d] w-fit p-2 rounded-md">
            Add to cart
          </button>
        </p>
      </div>
    </div>
  );
}
