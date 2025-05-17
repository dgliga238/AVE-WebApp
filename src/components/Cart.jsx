import React from "react";
import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";
import { useCartContext } from "../context/cartContext";

const Cart = ({ setShowcart }) => {
    const { product, total } = useCartContext();

    return (
        <div
            className="bg-[#0000007d] w-full h-screen fixed left-0 top-0 z-20"
            onClick={() => setShowcart(false)}
        >
            <div
                className=" dark:bg-red-950 text-gray-900 dark:text-gray-100 max-w-[400px] w-full h-full bg-white absolute right-0 top-0 p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <RxCross1
                    className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
                    onClick={() => setShowcart(false)}
                />
                <h3 className="pt-6 text-lg font-medium uppercase">
                    Your Cart
                </h3>
                <div className="mt-6">
                    {product?.map((el) => (
                        <CartProduct
                            key={el.name}
                            img={el.img}
                            name={el.name}
                            price={el.price}
                            quantity={el.quantity}
                        />
                    ))}
                    <p className="text-right font-semibold text-lg mt-4"> Total: ${total.toFixed(2)}</p>
                </div>
               { /*
                <button className="bg-red-800 text-white text-center w-full rounded-3xl py-2 hover:bg-red-900 mb-4 mt-4">
                    View Cart
                </button>
                <button className="bg-red-800 text-white text-center w-full rounded-3xl py-2 hover:bg-red-900">
                    Checkout
                </button>
                */}
            </div>
        </div>
    );
};

export default Cart;
