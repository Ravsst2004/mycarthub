import { IoBagOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 text-xl text-[#EDBF68]">
      <h1 className="font-bold">MyCartHub</h1>
      <IoBagOutline className="cursor-pointer" />
    </nav>
  );
}
