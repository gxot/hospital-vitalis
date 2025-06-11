import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/pages/form-page.css'; // Novo CSS compartilhado

const AlterarDadosPaciente: React.FC = () => {
  // Simulação de dados do paciente que seriam carregados da API
  const [nome, setNome] = useState('Eduardo Erthal');
  const [cpf] = useState('123.456.789-00'); // CPF geralmente não é editável
  const [email, setEmail] = useState('eduardo.erthal@email.com');
  const [dataNascimento, setDataNascimento] = useState('1990-05-15');
  const [planoSaude, setPlanoSaude] = useState('Unimed - Alfa Premium');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica para enviar os dados atualizados para a API
    alert('Dados atualizados com sucesso!');
  };

  return (
    <>
      <Header />
      <div className="form-page-container">
        <div className="form-card">
          <h1 className="form-title">Alterar Meus Dados</h1>
          <p className="form-subtitle">Mantenha suas informações sempre atualizadas.</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome_paciente" className="form-label">Nome Completo</label>
              <input 
                id="nome_paciente"
                type="text"
                className="form-input"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="cpf_paciente" className="form-label">CPF</label>
              <input 
                id="cpf_paciente"
                type="text"
                className="form-input"
                value={cpf}
                disabled // CPF não pode ser alterado
              />
            </div>

            <div className="form-group">
              <label htmlFor="email_paciente" className="form-label">Email</label>
              <input 
                id="email_paciente"
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="data_nascimento" className="form-label">Data de Nascimento</label>
              <input 
                id="data_nascimento"
                type="date"
                className="form-input"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="plano_saude" className="form-label">Plano de Saúde</label>
              <select 
                id="plano_saude"
                className="form-input" // Usando a mesma classe para consistência
                value={planoSaude}
                onChange={(e) => setPlanoSaude(e.target.value)}
              >
                <option>Amil - Advanced Executivo</option>
                <option>Bradesco Saúde - Top Nacional</option>
                <option>Unimed - Alfa Premium</option>
                <option>Particular</option>
              </select>
            </div>

            <div className="form-group">
              <button type="submit" className="form-button">Salvar Alterações</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AlterarDadosPaciente;