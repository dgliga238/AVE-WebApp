
import { useCartContext } from "../context/cartContext";

const CartCountBadge = ({size}) => {
  const { product } = useCartContext();
  return (
    <div className={`absolute bg-red-900 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`} >{product.length}</div>
  );
};

export default CartCountBadge