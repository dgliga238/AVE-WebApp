import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import MobNavBar from './components/MobNavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <MobNavBar />
    </main>
  ) 
      
}

export default App
