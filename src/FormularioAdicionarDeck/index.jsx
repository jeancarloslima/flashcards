import { motion } from "framer-motion";
import "./formulario-adicionar-deck.css";

export default function FormularioAdicionarDeck({ fecharFormularioDeck, adicionarDeckNaLista }) {
  function criarNovoDeck(formData) {
    const novoDeck = formData.get('nome-deck');

    adicionarDeckNaLista(novoDeck);
  }

  return (
    <div className="modal-overlay" onClick={fecharFormularioDeck}>
      <motion.form
        id="formulario-adicionar-deck"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        trasition={{ duration: 0.3 }}
        action={criarNovoDeck}
      >
        <input type="text" name="nome-deck" id="nome-deck" placeholder="Inglês" required />
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
