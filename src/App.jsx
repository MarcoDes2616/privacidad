import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PoliticaPrivacidad from './componets/PoliticaPrivacidad'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PoliticaPrivacidad />
    </>
  )
}

export default App
