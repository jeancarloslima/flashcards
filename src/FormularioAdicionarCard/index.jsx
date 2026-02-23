import { motion } from "framer-motion";
import "./formulario-adicionar-card.css";

export default function FormularioAdicionarCard({ fecharFormularioCard }) {
  return (
    <div className="modal-overlay" onClick={fecharFormularioCard}>
      <motion.form
        id="formulario-adicionar-card"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        trasition={{ duration: 0.3 }}
      >
        <input type="text" id="pergunta-card" placeholder="Work" />
        <input type="text" id="resposta-card" placeholder="Trabalhar" />
        <input
          type="submit"
          id="btn-salvar-card"
          value="ADICIONAR"
          onClick={fecharFormularioCard}
        />
      </motion.form>
    </div>
  );
}
