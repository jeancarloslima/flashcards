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

  const handleAcaoCard = direcao => {
    setAcaoCard(direcao);
  }

  return (
    <>
      <header>
        <ListaDeBaralhos
          abrirFormularioDeck={() => setIsFormDeckVisible(true)}
        />
      </header>

      <main>
        <AnimatePresence>
          {isFormCardVisible && (
            <FormularioAdicionarCard
              fecharFormularioCard={() => setIsFormCardVisible(false)}
            />
          )}
          {isFormDeckVisible && (
            <FormularioAdicionarDeck
              fecharFormularioDeck={() => setIsFormDeckVisible(false)}
            />
          )}
        </AnimatePresence>

        <FlashCard acaoCard={acaoCard} />
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
