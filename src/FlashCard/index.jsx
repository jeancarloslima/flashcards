import { useState } from "react";
import "./flash-card.css";

export default function FlashCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashcard" onClick={() => setFlipped(!flipped)}>
      <div className={`card ${flipped ? "is-flipped" : ""}`}>
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
