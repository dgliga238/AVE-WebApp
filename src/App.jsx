import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MobNavBar from './components/MobNavBar'
import Products from './components/Products'
import Cart from './components/Cart';
import { CartContextProvider } from './context/cartContext'


function App() {
  const [showCart, setShowCart] = useState(false)

  return (
    <CartContextProvider>
      <main>
      <Navbar  setShowCart={setShowCart}/>
      <MobNavBar setShowCart={setShowCart} />
      <Products />
      {showCart && <Cart setShowcart={setShowCart} />}
      </main>
    </CartContextProvider>
    
  ) 
      
}

export default App
