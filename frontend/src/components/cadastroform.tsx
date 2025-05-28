import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link para navegação

type CadastroProps = {
    setShowCadastro: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CadastroForm ({ setShowCadastro }: CadastroProps ) {
    
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Adicione aqui a lógica de submissão do formulário de cadastro
        console.log('Formulário de cadastro enviado');
        // Exemplo: após o cadastro bem-sucedido, redirecionar para o login
        // setShowCadastro(false);
    };

    return (
        <div className="cadastro-form-content"> 
            <form method="post" action="" onSubmit={handleSubmit}> {/* onSubmit */}
              <h2 className="form-title-within-card">Crie sua Conta</h2> {/* Título do formulário */}

              <div className="auth-form-group">
                <label htmlFor="nome_cad" className="auth-label">Nome Completo *</label>
                <input 
                  id="nome_cad" 
                  name="nome_cad" 
                  required 
                  type="text" 
                  placeholder="Seu nome completo" 
                  className="auth-input" 
                />
              </div>

              <div className="auth-form-group">
                <label htmlFor="numero_cpf" className="auth-label">CPF *</label>
                <input 
                  id="numero_cpf" 
                  name="numero_cpf" 
                  required 
                  type="text"  
                  placeholder="Apenas números" 
                  className="auth-input" 
                  pattern="\d{11}" // Validação simples para 11 dígitos
                  title="Digite os 11 dígitos do seu CPF, sem pontos ou traços."
                />
              </div>

              <div className="auth-form-group">
                <label htmlFor="email_cad" className="auth-label">Seu e-mail *</label>
                <input 
                  id="email_cad" 
                  name="email_cad" 
                  required 
                  type="email" 
                  placeholder="exemplo@dominio.com" 
                  className="auth-input" 
                />
              </div>

              <div className="auth-form-group">
                <label htmlFor="data_nascimento" className="auth-label">Data de Nascimento *</label>
                <input 
                  id="data_nascimento" 
                  name="data_nascimento" 
                  required 
                  type="date" 
                  className="auth-input" 
                />
              </div>

              <div className="auth-form-group">
                <label htmlFor="senha_cad" className="auth-label">Crie uma senha *</label>
                <input 
                  id="senha_cad" 
                  name="senha_cad" 
                  required 
                  type="password" 
                  placeholder="Mínimo 6 caracteres" 
                  className="auth-input"
                  minLength={6}
                />
              </div>

              <div className="auth-form-group">
                <label htmlFor="confirma_senha_cad" className="auth-label">Confirme sua senha *</label>
                <input 
                  id="confirma_senha_cad" 
                  name="confirma_senha_cad" 
                  required 
                  type="password" 
                  placeholder="Repita a senha" 
                  className="auth-input"
                />
              </div>

              <div className="auth-form-group"> {/* Envolvendo o botão para margem consistente */}
                <button type="submit" className="auth-button">
                  Cadastrar
                </button>
              </div>

              <p className="auth-link">
                <span>Já possui uma conta?</span>
                <a 
                  href="#" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    setShowCadastro(false); 
                  }}
                >
                  Faça Login
                </a>
              </p>
            </form>

            {/* Botão "Voltar para a página inicial" - Estilizado e usando Link */}
            <div className="auth-back-to-home">
              <Link to="/" className="btn-secondary-auth">
                Voltar para a página inicial
              </Link>
            </div>
        </div>
    );
}