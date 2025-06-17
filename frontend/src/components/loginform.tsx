import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  setShowCadastro: (show: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setShowCadastro }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setSucesso('');

    const formData = new URLSearchParams();
    formData.append('username', email);
    formData.append('password', senha);

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        credentials: 'include',
        body: formData.toString(),
      });

      if (response.ok) {
        setSucesso('Login realizado com sucesso!');
        // Aguarde um pequeno tempo para mostrar a mensagem, se quiser
        setTimeout(() => {
          navigate('/agendamento'); // Redireciona para a página de agendamento
        }, 500);
      } else {
        setErro('Usuário ou senha inválidos');
      }
    } catch (err) {
      setErro('Erro ao conectar com o servidor');
    }
  };

  return (
    <div id="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="auth-form-group">
          <label htmlFor="emailLogin" className="auth-label">Email:</label>
          <input
            type="email"
            id="emailLogin"
            className="auth-input"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="auth-form-group">
          <label htmlFor="senhaLogin" className="auth-label">Senha:</label>
          <input
            type="password"
            id="senhaLogin"
            className="auth-input"
            required
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
        </div>
        <div className="forgot-password-link">
          <a href="#">Esqueci minha senha</a>
        </div>
        <button type="submit" className="auth-button">Entrar</button>
        {erro && <div style={{ color: 'red', marginTop: 8 }}>{erro}</div>}
        {sucesso && <div style={{ color: 'green', marginTop: 8 }}>{sucesso}</div>}
      </form>
      <p className="auth-link">
        <span>Não tem uma conta?</span>
        <a href="#" onClick={(e) => { e.preventDefault(); setShowCadastro(true); }}>
          Cadastre-se
        </a>
      </p>
    </div>
  );
};

export default LoginForm;