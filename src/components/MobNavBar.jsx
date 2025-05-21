import { IoSearch } from "react-icons/io5";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { CiLight, CiDark } from "react-icons/ci"; 
import CartCountBadge from "./CartCountBadge";
import { useTheme } from "../context/ThemeContext";



const MobNavBar = ({setShowCart}) => {
        const { theme, toggleTheme } = useTheme();
    
  return (
    <div className='dark:bg-gray-800 sticky top-0 bg-white z-10'>
        <div className='container p-8 lg:hidden'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <IoSearch size={24}/>
                </div>
                <h1 className="text-4xl"><img
              src="/images/logo.jpg"
              alt="logo"
              className="w-25 h-auto object-contain"
            /></h1>
                <div className="flex gap-4 text-[30px]">
                    <FaRegUser />
                    <div className="relative cursor-pointer" onClick={() => setShowCart(true)}>
                        <FaShoppingCart />
                        <CartCountBadge size="w-[20px] h-[20px]"/>
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
  )
}

export default MobNavBar