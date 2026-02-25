import { useState } from "react";
import "./flash-card.css";

export default function FlashCard( {pergunta, resposta, acaoCard, quantidade} ) {
  const [flipped, setFlipped] = useState(false);
  let classeAcaoCard = ''
  if (acaoCard === "certo") classeAcaoCard = "card-certo";
  if (acaoCard === "incorreto") classeAcaoCard = "card-incorreto";

  return (
    <div className={`flashcard ${quantidade ? `flashcard-quantidade-${quantidade}` : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className={`card ${flipped ? "is-flipped" : ""} ${classeAcaoCard}`}>
        <div className="card-face card-frente">
          <p className="pergunta">{pergunta ? pergunta : "Não há cards na lista. Crie ou selecione um baralho e adicione cards para começar"}</p>
        </div>
        <div className="card-face card-verso">
          <p className="resposta">{resposta ? resposta : "Não há cards na lista. Crie ou selecione um baralho e adicione cards para começar"}</p>
        </div>
      </div>
    </div>
  );
}
