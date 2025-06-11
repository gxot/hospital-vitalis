import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/pages/form-page.css'; // Reutilizando o mesmo CSS

const AlterarSenha: React.FC = () => {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (novaSenha !== confirmaSenha) {
      alert('A nova senha e a confirmação não são iguais!');
      return;
    }
    if (novaSenha.length < 6) {
      alert('A nova senha deve ter no mínimo 6 caracteres.');
      return;
    }
    alert('Senha alterada com sucesso!');
    // Limpar campos após submissão
    setSenhaAtual('');
    setNovaSenha('');
    setConfirmaSenha('');
  };

  return (
    <>
      <Header />
      <div className="form-page-container">
        <div className="form-card">
          <h1 className="form-title">Alterar Senha</h1>
          <p className="form-subtitle">Para sua segurança, não compartilhe sua senha com ninguém.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="senha_atual" className="form-label">Senha Atual</label>
              <input 
                id="senha_atual"
                type="password"
                className="form-input"
                value={senhaAtual}
                onChange={(e) => setSenhaAtual(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="nova_senha" className="form-label">Nova Senha</label>
              <input 
                id="nova_senha"
                type="password"
                className="form-input"
                placeholder="Mínimo 6 caracteres"
                value={novaSenha}
                onChange={(e) => setNovaSenha(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirma_senha" className="form-label">Confirmar Nova Senha</label>
              <input 
                id="confirma_senha"
                type="password"
                className="form-input"
                placeholder="Repita a nova senha"
                value={confirmaSenha}
                onChange={(e) => setConfirmaSenha(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <button type="submit" className="form-button">Alterar Senha</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AlterarSenha;