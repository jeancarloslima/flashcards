import './formulario-adicionar-card.css';

export default function FormularioAdicionarCard( {fecharFormularioCard} ) {
    return(
        <div className="modal-overlay" onClick={fecharFormularioCard} >
            <form id="formulario-adicionar-card" onClick={(e) => e.stopPropagation()}>
                <input type="text" id="pergunta-card" placeholder='Work' />
                <input type="text" id="resposta-card" placeholder='Trabalhar' />
                <input type="submit" id='btn-salvar-card' value="ADICIONAR" onClick={fecharFormularioCard} />
            </form>
        </div>
    )
}