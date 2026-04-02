import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      {/* Left - Logo */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-medium tracking-wide">
          Ecommerce
        </Link>
      </div>
      
      {/* Center - Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Men
        </Link>
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Women
        </Link>
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Top Wear
        </Link>
        <Link
          to="#"
          className="text-gray-700 hover:text-black text-sm font-medium uppercase"
        >
          Bottom Wear
        </Link>
      </div>
      {/* Right - Icons */}
      <div className="flex-1 flex justify-end items-center space-x-4 sm:space-x-6">
        <Link to="/profile" className="hover:text-black">
          <HiOutlineUser className="h-6 w-6 text-gray-700" />
        </Link>
        <button className="relative hover:text-black">
          <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
          <span className="absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5">
            4
          </span>
        </button>
        {/* Search */}

        <button className="md:hidden">
          <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;