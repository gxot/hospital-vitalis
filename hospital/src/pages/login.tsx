import React, { useState } from 'react';
import '../styles/pages/style.css';
import CadastroForm from '../components/cadastroform';
import LoginForm from '../components/loginform';

const Login: React.FC = () => {
  const [showCadastro, setShowCadastro] = useState(false);

  return (
    <div className="container">
      <div className="content">
        {/* FORMULÁRIO DE LOGIN */}
        {!showCadastro && (
          <LoginForm setShowCadastro={setShowCadastro} />
        )}

        {/* FORMULÁRIO DE CADASTRO */}
        {showCadastro && (
          <CadastroForm setShowCadastro={setShowCadastro}/>
        )}
      </div>
    </div>
  );
};

export default Login;
