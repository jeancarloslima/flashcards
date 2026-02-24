import { motion } from "framer-motion";
import "./formulario-adicionar-deck.css";

export default function FormularioAdicionarDeck({ fecharFormularioDeck }) {
  return (
    <div className="modal-overlay" onClick={fecharFormularioDeck}>
      <motion.form
        id="formulario-adicionar-deck"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        trasition={{ duration: 0.3 }}
      >
        <input type="text" id="nome-deck" placeholder="Inglês" required />
        <input
          type="submit"
          id="btn-salvar-deck"
          value="ADICIONAR"
          onClick={fecharFormularioDeck}
        />
      </motion.form>
    </div>
  );
}
