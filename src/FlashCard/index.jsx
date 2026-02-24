import { useState } from "react";
import "./flash-card.css";

export default function FlashCard( {acaoCard} ) {
  const [flipped, setFlipped] = useState(false);
  let classeAcaoCard = ''
  if (acaoCard === "certo") classeAcaoCard = "card-certo";
  if (acaoCard === "incorreto") classeAcaoCard = "card-incorreto";

  return (
    <div className="flashcard" onClick={() => setFlipped(!flipped)}>
      <div className={`card ${flipped ? "is-flipped" : ""} ${classeAcaoCard}`}>
        <div className="card-face card-frente">
          <p className="pergunta">Work</p>
        </div>
        <div className="card-face card-verso">
          <p className="resposta">Trabalhar</p>
        </div>
      </div>
    </div>
  );
}
