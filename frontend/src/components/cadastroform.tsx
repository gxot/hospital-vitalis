import React from 'react';
import { Link } from 'react-router-dom';
import PlanoSaudeSelect from '../functions/planosdesaude';

type CadastroProps = {
    setShowCadastro: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CadastroForm ({ setShowCadastro }: CadastroProps ) {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        // Monta o objeto com os dados do formulário
        const data = {
            nome: formData.get('nome_cad'),
            cpf: formData.get('numero_cpf'),
            email: formData.get('email_cad'),
            dataNascimento: formData.get('data_nascimento'),
            plano_de_saude_id: Number(formData.get('planoSaude')),
            senha: formData.get('senha_cad'),
        };
        
        console.log('data:', data);

        try {
            const response = await fetch('http://localhost:8080/pacientes/criar_paciente', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Sucesso! Faça o que quiser aqui (ex: redirecionar, mostrar mensagem, etc)
                alert('Cadastro realizado com sucesso!');
                setShowCadastro(false);
            } else {
                // Erro do backend
                const error = await response.text();
                alert('Erro ao cadastrar: ' + error);
            }
        } catch (err) {
            alert('Erro de conexão com o servidor.');
        }
    };

    return (
        <div className="cadastro-form-content"> 
            <form method="post" action="" onSubmit={handleSubmit}>
              <h2 className="form-title-within-card">Crie sua Conta</h2>

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
                  pattern="\d{11}"
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
                  <PlanoSaudeSelect />
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

              <div className="auth-form-group">
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

            <div className="auth-back-to-home">
              <Link to="/" className="btn-secondary-auth">
                Voltar para a página inicial
              </Link>
            </div>
        </div>
    );
}