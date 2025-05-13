import React, { useState } from 'react';
import '../styles/style.css';

const Login: React.FC = () => {
  const [showCadastro, setShowCadastro] = useState(false);

  return (
    <div className="container">
      <div className="content">
        {/* FORMULÁRIO DE LOGIN */}
        {!showCadastro && (
          <div id="login">
            <form method="post" action="">
              <h1>Login</h1>
              <p>
                <label htmlFor="nome_login">Nome</label>
                <input id="nome_login" name="nome_login" required type="text" />
              </p>

              <p>
                <label htmlFor="numero_cpf">CPF</label>
                <input id="numero_cpf" name="numero_cpf" required type="password" />
              </p>

              <p>
                <label htmlFor="email_login">E-mail</label>
                <input id="email_login" name="email_login" required type="password" />
              </p>

              <p>
                <label htmlFor="data_nascimento">Data de Nascimento</label>
                <input id="data_nascimento" name="data_nascimento" required type="date" />
              </p>

              <p>
                <input type="checkbox" name="manterlogado" id="manterlogado" />
                <label htmlFor="manterlogado">Continuar Conectado</label>
              </p>

              <p>
                <input type="submit" value="Logar" />
              </p>

              <p className="link">
                Ainda não tem conta?{' '}
                <button type="button" onClick={() => setShowCadastro(true)} className="link-button">
                  Cadastre-se
                </button>
              </p>
            </form>
          </div>
        )}

        {/* FORMULÁRIO DE CADASTRO */}
        {showCadastro && (
          <div id="cadastro">
            <form method="post" action="">
              <h1>Cadastro</h1>

              <p>
                <label htmlFor="nome_cad">Seu nome</label>
                <input id="nome_cad" name="nome_cad" required type="text" placeholder="Nome Completo" />
              </p>

              <p>
                <label htmlFor="numero_cpf">CPF</label>
                <input id="numero_cpf" name="numero_cpf" required type="password" placeholder="Ex: 12345678901" />
              </p>

              <p>
                <label htmlFor="email_cad">Seu e-mail</label>
                <input id="email_cad" name="email_cad" required type="email" placeholder="contato@seudominio.com" />
              </p>

              <p>
                <label htmlFor="data_nascimento">Data de Nascimento</label>
                <input id="data_nascimento" name="data_nascimento" required type="date" />
              </p>

              <p>
                <label htmlFor="senha_cad">Sua senha</label>
                <input id="senha_cad" name="senha_cad" required type="password" placeholder="Ex: 1234" />
              </p>

              <p>
                <input type="submit" value="Cadastrar" />
              </p>

              <p className="link">
                Possui Conta?{' '}
                <button type="button" onClick={() => setShowCadastro(false)} className="link-button">
                  Ir para Login
                </button>
              </p>
            </form>
          </div>
        )}
      </div>

      <button onClick={() => window.location.href = 'inicio.html'}>
        Voltar para a página inicial
      </button>
    </div>
  );
};

export default Login;
