import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/pages/form-page.css';

const AlterarSenha: React.FC = () => {
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [mensagem, setMensagem] = useState<{ tipo: 'erro' | 'sucesso'; texto: string } | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMensagem(null);

    if (novaSenha !== confirmaSenha) {
      setMensagem({ tipo: 'erro', texto: 'A nova senha e a confirmação não são iguais!' });
      return;
    }
    if (novaSenha.length < 6) {
      setMensagem({ tipo: 'erro', texto: 'A nova senha deve ter no mínimo 6 caracteres.' });
      return;
    }

    // Checa a senha atual
    const checar = await fetch('http://localhost:8080/pacientes/checar_senha', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ senhaAtual })
    }).then(res => res.json());

    if (!checar || checar !== true) {
      setMensagem({ tipo: 'erro', texto: 'Senha atual incorreta.' });
      return;
    }

    // Atualiza a senha
    const alterar = await fetch('http://localhost:8080/pacientes/atualizar_senha', {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ novaSenha })
    });

    if (alterar.ok) {
      setMensagem({ tipo: 'sucesso', texto: 'Senha alterada com sucesso!' });
      setSenhaAtual('');
      setNovaSenha('');
      setConfirmaSenha('');
    } else {
      setMensagem({ tipo: 'erro', texto: 'Erro ao alterar a senha.' });
    }
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

            {mensagem && (
              <div
                className={`alert ${mensagem.tipo === 'sucesso' ? 'alert-success' : 'alert-danger'} mt-3`}
                role="alert"
              >
                {mensagem.texto}
              </div>
            )}

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