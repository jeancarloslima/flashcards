import { useRef, useState } from "react";
import "./App.css";
import Carta from "./components/Carta";
import cardSound from "./assets/card-slide-3.ogg";
import cardFlipSound from "./assets/card-shove-1.ogg";
import cardShuffleSound from "./assets/card-fan-1.ogg";

const cartasIniciais = [
  {
    id: 1,
    frente: "Night",
    verso: "Noite",
  },
  {
    id: 2,
    frente: "Eyes",
    verso: "Olhos",
  },
  {
    id: 3,
    frente: "Hello",
    verso: "Olá",
  },
  {
    id: 4,
    frente: "Help",
    verso: "Ajuda / Socorro!",
  },
  {
    id: 5,
    frente: "Light",
    verso: "Luz",
  },
  {
    id: 6,
    frente: "Love",
    verso: "Amor",
  },
  {
    id: 7,
    frente: "Happiness",
    verso: "Felicidade",
  },
  {
    id: 8,
    frente: "Cat",
    verso: "Gato",
  },
  {
    id: 9,
    frente: "Dog",
    verso: "Cachorro",
  },
  {
    id: 10,
    frente: "Smile",
    verso: "Sorrir / Sorriso",
  },
];

function App() {
  const [cartas, setCartas] = useState(cartasIniciais);
  const [cartaVirada, setcartaVirada] = useState(false);
  const [acertos, setAcertos] = useState(0);
  const [totalPerguntas, setTotalPerguntas] = useState(cartasIniciais.length);
  const audioCardRef = useRef(new Audio(cardSound));
  const audioCardFlipRef = useRef(new Audio(cardFlipSound));
  const audioCardShuffleRef = useRef(new Audio(cardShuffleSound));

  function handleViraCarta() {
    setcartaVirada(!cartaVirada);

    audioCardFlipRef.current.currentTime = 0;
    audioCardFlipRef.current.play();
  }

  function handleCorrecao(event) {
    if (event.target.value === "correto") {
      setAcertos((acertosAtual) => acertosAtual + 1);
    }

    setcartaVirada(false);
    setCartas((cartasAtuais) => cartasAtuais.slice(0, -1));

    audioCardRef.current.currentTime = 0;
    audioCardRef.current.play();
  }

  function handleReinicio() {
    setCartas(cartasIniciais);
    setAcertos(0);

    audioCardShuffleRef.current.play();
  }

  return (
    <div className="app">
      <main>
        <div className="main-container">
          <ul className="lista-cartas">
            <h2>
              Você acertou {acertos} de {totalPerguntas} (
              {(acertos / totalPerguntas) * 100}%)
            </h2>
            {cartas.length > 0 &&
              cartas.map((carta) => (
                <Carta
                  noCLique={handleViraCarta}
                  key={carta.id}
                  texto={!cartaVirada ? carta.frente : carta.verso}
                  estado={cartaVirada}
                />
              ))}
          </ul>

          <div className="container-botoes">
            {cartas.length > 0 && (
              <>
                <button
                  value="correto"
                  onClick={handleCorrecao}
                  className="btn-correcao btn-correto"
                >
                  ACERTEI
                </button>
                <button
                  value="incorreto"
                  onClick={handleCorrecao}
                  className="btn-correcao btn-incorreto"
                >
                  ERREI
                </button>
              </>
            )}
            {cartas.length < 1 && (
              <button className="btn-correcao btn-reinicia" onClick={handleReinicio}>Recomeçar</button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
