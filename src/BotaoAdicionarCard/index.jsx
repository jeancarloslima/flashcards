import './botao-adicionar-card.css';

export default function BotaoAdicionarCard( {abrirFormularioCard} ) {
    return (
        <>
            <button id="btn-adicionar-card" onClick={abrirFormularioCard}>+</button>
        </>
    )
}