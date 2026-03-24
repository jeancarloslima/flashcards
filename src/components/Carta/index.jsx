import "./carta.css";

export default function Carta({ texto, noCLique, estado }) {
    return (
        <div className={`carta ${estado ? "carta-virada" : ""}`} onClick={noCLique}>
            <h2>{texto}</h2>
        </div>
    )
}