import React from 'react';

interface LoginFormProps {
  setShowCadastro: (show: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setShowCadastro }) => {
  return (
    <div id="login"> 
      <h2>Login</h2>
      <form>
        <div className="auth-form-group">
          <label htmlFor="emailLogin" className="auth-label">Email:</label>
          <input type="email" id="emailLogin" className="auth-input" required />
        </div>
        <div className="auth-form-group">
          <label htmlFor="senhaLogin" className="auth-label">Senha:</label>
          <input type="password" id="senhaLogin" className="auth-input" required />
        </div>
        <div className="forgot-password-link">
          <a href="#">Esqueci minha senha</a>
        </div>
        <button type="submit" className="auth-button">Entrar</button>
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