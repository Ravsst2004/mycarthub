import products from "../data/products";
import CartProduct from "./CartProduct";

export default function Products() {
  return (
    <div className="mt-6">
      <h1 className="text-3xl font-bold text-[#A59B8B] text-center md:text-start p-2">
        Elegant Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 p-2">
        {products.map((product) => (
          <div key={product.id}>
            <CartProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
