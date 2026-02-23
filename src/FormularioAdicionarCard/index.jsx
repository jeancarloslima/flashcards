import './formulario-adicionar-card.css';

export default function FormularioAdicionarCard( {fecharFormularioCard} ) {
    return(
        <form id="formulario-adicionar-card">
            <input type="text" id="pergunta-card" placeholder='Work' />
            <input type="text" id="resposta-card" placeholder='Trabalhar' />
            <input type="submit" id='btn-salvar-card' value="ADICIONAR" onClick={fecharFormularioCard} />
        </form>
    )
}