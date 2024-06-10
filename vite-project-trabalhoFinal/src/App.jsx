import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Rotas } from './routes/routes'
import { ProdutoProvider } from './context/produtoContext'
import { CartProvider } from './context/carrinhoContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CartProvider>
      <ProdutoProvider>
      <Rotas/>
      </ProdutoProvider>
      </CartProvider>
    </>
  )
}

export default App
