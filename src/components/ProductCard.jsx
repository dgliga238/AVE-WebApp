import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../context/cartContext';

const ProductCard = ({ img, name, price }) => {
  const { addToCart } = useCartContext();

  const addProductToCart = () => {
    // toast.success("Added to Cart!");
    addToCart({ img, name, price });
  };

  return (
    <div className="w-full mb-4 cursor-pointer shadow-lg p-4 border border-black rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-3">
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

export default ProductCard;
