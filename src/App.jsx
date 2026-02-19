import { useState } from 'react'
import './App.css'
import FlashCard from './FlashCard'
import BotoesCertoErrado from './BotoesCertoErrado'
import ListaDeBaralhos from './ListaDeBaralhos'
import BotaoAdicionarCard from './BotaoAdicionarCard'

function App() {
  return (
    <>
      <header>
        <ListaDeBaralhos />
      </header>

      <main>
        <FlashCard />
        <BotoesCertoErrado />
      </main>

      <footer>
        <BotaoAdicionarCard />
      </footer>
    </>
  )
}

export default App
