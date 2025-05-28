import React, { useState } from 'react';
import '../styles/pages/login.css'; 
import CadastroForm from '../components/cadastroform';
import LoginForm from '../components/loginform';
import Header from '../components/header';
import Footer from '../components/footer';

// imagem logo
const logoPath = '/logo.png';

const Login: React.FC = () => {
  const [showCadastro, setShowCadastro] = useState(false);

  return (
    <>
      <Header />

    <div className="login-page-container">
      <div className="auth-card">
        <div className="auth-logo-container">
          <img src={logoPath} alt="Logo Hospital Vitalis" className="auth-logo" />
        </div>

        {/* FORMULÁRIO DE LOGIN */}
        <div className={`form-wrapper ${!showCadastro ? 'active' : 'inactive'}`}>
          {!showCadastro && (
            <LoginForm setShowCadastro={setShowCadastro} />
          )}
        </div>

        {/* FORMULÁRIO DE CADASTRO */}
        <div className={`form-wrapper ${showCadastro ? 'active' : 'inactive'}`}>
          {showCadastro && (
            <CadastroForm setShowCadastro={setShowCadastro} />
          )}
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default Login;