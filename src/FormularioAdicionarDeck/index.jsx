import './formulario-adicionar-deck.css';

export default function FormularioAdicionarDeck( {fecharFormularioDeck} ) {
    return(
        <div className="modal-overlay" onClick={fecharFormularioDeck}>
            <form id="formulario-adicionar-deck" onClick={(e) => e.stopPropagation()}>
                <input type="text" id="nome-deck" placeholder='Inglês' />
                <input type="submit" id='btn-salvar-deck' value="ADICIONAR" onClick={fecharFormularioDeck}/>
            </form>
        </div>
    )
}