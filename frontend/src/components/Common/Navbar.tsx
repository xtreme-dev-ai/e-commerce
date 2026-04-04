import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <nav className="border-b border-gray-300 relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left - Logo */}
        <div className="flex-1">
          <Link to="/" className="text-xl md:text-2xl font-medium tracking-wide">
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
          <SearchBar />
          
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
          </Link>
          
          <button onClick={toggleCartDrawer} className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
            <span className="absolute -top-1 bg-rabbit-red text-white text-[10px] sm:text-xs rounded-full px-1.5 sm:px-2 py-0.5">
              4
            </span>
          </button>

          <button className="md:hidden">
            <HiBars3BottomRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
    </nav>
  );
};

export default Navbar;