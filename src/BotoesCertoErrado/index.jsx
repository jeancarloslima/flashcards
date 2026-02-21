import './botoes-certo-errado.css'

export default function BotoesCertoErrado() {
    return (
        <div id="botoes-certo-errado">
            <button className='btn-certo-errado' id="btn-certo">ACERTEI</button>
            <button className='btn-certo-errado' id="btn-errado">ERREI</button>
        </div>
    )
}