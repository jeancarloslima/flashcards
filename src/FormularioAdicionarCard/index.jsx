import { motion } from "framer-motion";
import "./formulario-adicionar-card.css";

export default function FormularioAdicionarCard({ fecharFormularioCard, adicionaFlashcardNaLista }) {
  function criarNovoCard(formData) {
    const novoFlashcard = {
      id: 1,
      pergunta: formData.get('pergunta-card'),
      resposta: formData.get('resposta-card')
    }

    adicionaFlashcardNaLista(novoFlashcard);
  }

  return (
    <div className="modal-overlay" onClick={fecharFormularioCard}>
      <motion.form
        id="formulario-adicionar-card"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        trasition={{ duration: 0.3 }}
        action={criarNovoCard}
      >
        <input type="text" name="pergunta-card" id="pergunta-card" placeholder="Work" required/>
        <input type="text" name="resposta-card" id="resposta-card" placeholder="Trabalhar" required/>
        <input
          type="submit"
          id="btn-salvar-card"
          value="ADICIONAR"
        />
      </motion.form>
    </div>
  );
}
