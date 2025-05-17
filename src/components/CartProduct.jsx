import { RxCross1 } from "react-icons/rx";
import { useCartContext } from "../context/cartContext";

const CartProduct = ({ img, name, price, quantity }) => {
  const { removeFromCart } = useCartContext();

  return (
    <div className="bg-amber-50 dark:bg-red-950 flex justify-between items-center mb-4">
      <div className="flex items-center gap-4">
        <img className="h-[100px] w-[100px] object-cover" src={img} alt={name} />
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-600">
            {quantity} x ${price} = ${price * quantity}
          </p>
        </div>
      </div>
      <RxCross1
        onClick={() => removeFromCart(name)}
        className="cursor-pointer text-red-600 hover:text-red-800"
        title="Remove one item"
      />
    </div>
  )
}
export default CartProduct
