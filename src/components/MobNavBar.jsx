import { IoMenuSharp, IoSearch } from "react-icons/io5";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import CartCountBadge from "./CartCountBadge";


const MobNavBar = ({setShowCart}) => {
  return (
    <div className='dark:bg-gray-800 sticky top-0 bg-white z-10'>
        <div className='container p-8 lg:hidden'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <IoMenuSharp size={30}/>
                    <IoSearch size={24}/>
                </div>
                <h1 className="text-4xl">Logo</h1>
                <div className="flex gap-4 text-[30px]">
                    <FaRegUser />
                    <div className="relative cursor-pointer" onClick={() => setShowCart(true)}>
                        <FaShoppingCart />
                        <CartCountBadge size="w-[20px] h-[20px]"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobNavBar