import { useState } from 'react';

import IlustracaoBanner from '../../../images/IlustracaoBanner.svg';

import styles from './RegisterModal.module.scss';

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
}

export default function RegisterModal({ open, onClose }: RegisterModalProps) {
  const [checked, setChecked] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Fechar">×</button>
        <img src={IlustracaoBanner} alt="Cadastro" className={styles.illustration} />
        <h2 className={styles.title}>
          Preencha os campos abaixo para criar sua conta corrente!
        </h2>
        <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="register-nome">Nome</label>
            <input id="register-nome" className={styles.input} type="text" placeholder="Digite seu nome completo" required />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="register-email">Email</label>
            <input id="register-email" className={styles.input} type="email" placeholder="Digite seu email" required />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="register-senha">Senha</label>
            <input id="register-senha" className={styles.input} type="password" placeholder="Digite sua senha" required />
          </div>

          <div className={styles.checkboxRow}>
            <input id="register-termos" type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} required className={styles.checkbox} />
            <label htmlFor="register-termos" className={styles.checkboxLabel}>
              Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco.
            </label>
          </div>
          <button type="submit" className={styles.submitButton}>
            Criar conta
          </button>
        </form>
      </div>
    </div>
  );
} 