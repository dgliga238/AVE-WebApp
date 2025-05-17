import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../context/cartContext';
import { toast } from 'react-toastify';


const ProductCard = ({ img, name, price }) => {
  const { addToCart } = useCartContext();


  const addProductToCart = () => {
    addToCart({ img, name, price });
        const isDarkMode = document.documentElement.classList.contains('dark');

    toast.success("Added to Cart!", {
  position: "top-center", // top-right, top-center, bottom-left, etc.
  autoClose: 2000,        // time in ms
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
theme: isDarkMode ? "dark" : "light",});

  };

  return (
    <div className=" bg-white dark:bg-gray-200 text-gray-950 w-full mb-4 cursor-pointer shadow-lg p-4 border border-black rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-3">
      <img className="w-full object-cover mb-4" src={img} alt={name} />

      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium">{name}</h3>
          <h3 className="text-2xl font-medium text-red-900">{price}</h3>
        </div>
        <button
          onClick={addProductToCart}
          className="bg-red-900 hover:bg-red-950 text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center"
          aria-label="Add to cart"
        >
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard
