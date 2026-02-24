import './botoes-certo-errado.css'

export default function BotoesCertoErrado({ onAction }) {
    return (
        <div id="botoes-certo-errado">
            <button className='btn-certo-errado' id="btn-certo" onClick={() => onAction('certo')}>ACERTEI</button>
            <button className='btn-certo-errado' id="btn-errado" onClick={() => onAction('incorreto')}>ERREI</button>
        </div>
    )
}