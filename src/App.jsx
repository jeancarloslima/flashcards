import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import FlashCard from "./FlashCard";
import BotoesCertoErrado from "./BotoesCertoErrado";
import ListaDeBaralhos from "./ListaDeBaralhos";
import BotaoAdicionarCard from "./BotaoAdicionarCard";
import FormularioAdicionarCard from "./FormularioAdicionarCard";
import FormularioAdicionarDeck from "./FormularioAdicionarDeck";

function App() {
  const [isFormDeckVisible, setIsFormDeckVisible] = useState(false);
  const [isFormCardVisible, setIsFormCardVisible] = useState(false);
  const [acaoCard, setAcaoCard] = useState(null);
  const [decks, setDecks] = useState([]);
  const [flashcards, setFlashcards] = useState([]);

  const handleAcaoCard = (direcao) => {
    setAcaoCard(direcao);
  };

  function adicionarDeck(novoDeck) {
    setDecks([...decks, novoDeck]);
  }

  function adicionarFlashcard(novoFlashcard) {
    setFlashcards([...flashcards, novoFlashcard]);
    console.log(flashcards);
    
  }

  return (
    <>
      <header>
        <ListaDeBaralhos
          abrirFormularioDeck={() => setIsFormDeckVisible(true)}
          decks={decks}
        />
      </header>

      <main>
        <AnimatePresence>
          {isFormCardVisible && (
            <FormularioAdicionarCard
              fecharFormularioCard={() => setIsFormCardVisible(false)}
              adicionaFlashcardNaLista={adicionarFlashcard}
            />
          )}
          {isFormDeckVisible && (
            <FormularioAdicionarDeck
              fecharFormularioDeck={() => setIsFormDeckVisible(false)}
              adicionarDeckNaLista={adicionarDeck}
            />
          )}
        </AnimatePresence>

        {flashcards.length > 0 && flashcards.length < 2 && (
          <FlashCard pergunta={flashcards[0].pergunta} resposta={flashcards[0].resposta} acaoCard={acaoCard} quantidade={1} />
        )}

        {flashcards.length > 1 && (
          <FlashCard pergunta={flashcards[0].pergunta} resposta={flashcards[0].resposta} acaoCard={acaoCard} quantidade={2} />
        )}

        {flashcards.length < 1 && (
          <FlashCard acaoCard={acaoCard} />
        )}

        <BotoesCertoErrado onAction={handleAcaoCard} />
      </main>

      <footer>
        <BotaoAdicionarCard
          abrirFormularioCard={() => setIsFormCardVisible(true)}
        />
      </footer>
    </>
  );
}

export default App;
