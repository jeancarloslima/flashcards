import './formulario-adicionar-deck.css';

export default function FormularioAdicionarDeck( {fecharFormularioDeck} ) {
    return(
        <form id="formulario-adicionar-deck">
            <input type="text" id="nome-deck" placeholder='Inglês' />
            <input type="submit" id='btn-salvar-deck' value="ADICIONAR" onClick={fecharFormularioDeck} />
        </form>
    )
}