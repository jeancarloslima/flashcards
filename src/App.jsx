import { useState } from 'react'
import './App.css'
import FlashCard from './FlashCard'
import BotoesCertoErrado from './BotoesCertoErrado'
import ListaDeBaralhos from './ListaDeBaralhos'

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
    </>
  )
}

export default App
