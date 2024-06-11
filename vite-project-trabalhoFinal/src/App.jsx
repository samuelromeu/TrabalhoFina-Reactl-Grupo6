import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Rotas } from './routes/routes'
import { ProdutoProvider } from './context/produtoContext'
import { CartProvider } from './context/carrinhoContext'
import { AuthProvider } from './context/AuthContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthProvider>
    <CartProvider>
      <ProdutoProvider>
      <Rotas/>
      </ProdutoProvider>
      </CartProvider>
    </AuthProvider>
    </>
  )
}

export default App
