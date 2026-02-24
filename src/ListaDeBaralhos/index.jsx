import { TbCards } from "react-icons/tb";
import "./lista-de-baralhos.css";

export default function ListaDeBaralhos({ abrirFormularioDeck, decks }) {
  return (
    <ul id="lista-de-baralhos">
      {decks.map((deck, index) => (
        <li className="item-baralho baralho-selecionado" key={index}>
          <TbCards /> <span>{deck}</span>
        </li>
      ))}
      <button id="btn-adicionar-baralho" onClick={abrirFormularioDeck}>
        +
      </button>
    </ul>
  );
}
