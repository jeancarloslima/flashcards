import { useRef, useState } from "react";
import "./App.css";
import Carta from "./components/Carta";
import cardSound from "./assets/card-slide-3.ogg";

const cartasIniciais = [
  {
    id: 1,
    frente: "need",
    verso: "precisar",
  },
  {
    id: 2,
    frente: "make",
    verso: "fazer",
  },
];

function App() {
  const [cartas, setCartas] = useState(cartasIniciais);
  const [cartaVirada, setcartaVirada] = useState(false);
  const [acertos, setAcertos] = useState(0);
  const [totalPerguntas, setTotalPerguntas] = useState(cartasIniciais.length);
  const audioCardRef = useRef(new Audio(cardSound));

  function handleViraCarta() {
    setcartaVirada(!cartaVirada);
  }

  function handleCorrecao(event) {
    if (event.target.value === "correto") {
        setAcertos((acertosAtual) => acertosAtual + 1);
    }

    setcartaVirada(false);
    setCartas((cartasAtuais) => cartasAtuais.slice(0, -1));

    audioCardRef.current.currentTime = 0
    audioCardRef.current.play();
  }

  return (
    <div className="app">
      <main>
        <div className="main-container">
          <ul className="lista-cartas">
            <h2>Você acertou {acertos} de {totalPerguntas} ({acertos / totalPerguntas * 100}%)</h2>
            {cartas.length > 0 && cartas.map((carta) => (
              <Carta
                noCLique={handleViraCarta}
                key={carta.id}
                texto={!cartaVirada ? carta.frente : carta.verso}
              />
            ))}
          </ul>

          <div className="container-botoes">
            <button value="correto" onClick={handleCorrecao} className="btn-correcao btn-correto">ACERTEI</button>
            <button value="incorreto" onClick={handleCorrecao} className="btn-correcao btn-incorreto">ERREI</button>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
