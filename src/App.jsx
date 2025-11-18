import { useState } from 'react'
import Header from './components/Header'
import CardPerfil from './components/CardPerfil'
import Feed from './components/Feed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Feed />
    </>
  )
}

export default App
