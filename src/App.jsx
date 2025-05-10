import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import MobNavBar from './components/MobNavBar'
import Products from './components/Products'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <MobNavBar />
      <Products />
    </main>
  ) 
      
}

export default App
