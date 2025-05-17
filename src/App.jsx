import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MobNavBar from './components/MobNavBar'
import Products from './components/Products'
import Cart from './components/Cart';
import { CartContextProvider } from './context/cartContext'
import { ThemeProvider } from "./context/ThemeContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [showCart, setShowCart] = useState(false)

  return (
    <ThemeProvider>
    <CartContextProvider>
      <main>
      <Navbar setShowCart={setShowCart}/>
      <MobNavBar setShowCart={setShowCart} />
      <Products />
      <ToastContainer />
      {showCart && <Cart setShowcart={setShowCart} />}
      </main>
    </CartContextProvider>
    </ThemeProvider>
  ) 
      
}

export default App
