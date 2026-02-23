import "./App.css";
import FlashCard from "./FlashCard";
import BotoesCertoErrado from "./BotoesCertoErrado";
import ListaDeBaralhos from "./ListaDeBaralhos";
import BotaoAdicionarCard from "./BotaoAdicionarCard";
import FormularioAdicionarCard from "./FormularioAdicionarCard";
import { useState } from "react";
import FormularioAdicionarDeck from "./FormularioAdicionarDeck";

function App() {
  const [isFormDeckVisible, setIsFormDeckVisible] = useState(false);
  const [isFormCardVisible, setIsFormCardVisible] = useState(false);

  return (
    <>
      <header>
        <ListaDeBaralhos abrirFormularioDeck={() => setIsFormDeckVisible(true)} />
      </header>

      <main>
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
        <FlashCard />
        <BotoesCertoErrado />
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
