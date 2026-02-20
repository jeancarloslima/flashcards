import { TbCards } from 'react-icons/tb';
import './lista-de-baralhos.css';

export default function ListaDeBaralhos() {
    return (
        <ul id="lista-de-baralhos">
            <li className="item-baralho baralho-selecionado"><TbCards /> <span>INGLÊS</span></li>
            <li className="item-baralho"><TbCards /> <span>Programação</span></li>
            <li className="item-baralho"><TbCards /> <span>INGLÊS</span></li>
            <li className="item-baralho"><TbCards /> <span>INGLÊS</span></li>
            <button id="btn-adicionar-baralho">+</button>
        </ul>
    )
}