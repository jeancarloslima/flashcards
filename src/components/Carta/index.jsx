import "./carta.css";

export default function Carta({ texto, noCLique }) {
    return (
        <div className="carta" onClick={noCLique}>
            <h2>{texto}</h2>
        </div>
    )
}