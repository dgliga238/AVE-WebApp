import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import CartCountBadge from "./CartCountBadge";
import { CiLight, CiDark } from "react-icons/ci"; 
import { useTheme } from "../context/ThemeContext";



const Navbar = ({ setShowCart }) => {
    const { theme, toggleTheme } = useTheme();

  return (
    <div className={`bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10 w-full`}>
      
      <div className="hidden lg:block px-6">
        <div className="flex items-center p-8 gap-8">
          <div className="shrink-0">
            <img
              src="/images/logo.jpg"
              alt="logo"
              className="w-25 h-auto object-contain"
            />
          </div>

          <div className="flex items-center gap-6 ml-auto">
            <div className="relative w-full max-w-[300px]">
              <input
                className="bg-red-200 text-gray-800 border-none outline-none px-6 py-3 rounded-2xl w-full"
                type="text"
                placeholder="Search Product"
              />
              <IoSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" size={20} />
            </div>

            <div className="flex gap-4">
              <div className="icon__wrapper">
                <FaRegUser />
              </div>
              <div
                className="icon__wrapper relative cursor-pointer"
                onClick={() => setShowCart(true)}
              >
                <FaShoppingCart />
                <CartCountBadge size="w-[25px] h-[25px]" />
              </div>
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className={`p-2 rounded-full
                  ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}
                  transition-colors`}
              >
                {theme === 'dark' ? (
                  <span className="text-yellow-300 text-xl"><CiLight /></span>
                ) : (
                  <span className="text-gray-700 text-xl"><CiDark /></span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
