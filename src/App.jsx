import Navbar from "./components/Navbar";
import Products from "./components/Products";

export default function App() {
  return (
    <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
      <Navbar />
      <Products />
    </div>
  );
}
