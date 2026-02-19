import './flash-card.css'

export default function FlashCard( {pergunta, resposta} ) {
    return (
        <div className="flashcard">
            <p className="pergunta">Work</p>
            <p className="resposta">Trabalhar</p>
        </div>
    )
}