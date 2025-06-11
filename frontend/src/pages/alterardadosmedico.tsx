import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/pages/form-page.css'; // Reutilizando o mesmo CSS

const AlterarDadosMedico: React.FC = () => {
  // Simulação de dados do médico
  const [nome, setNome] = useState('Dr. Alex Oliveira');
  const [email, setEmail] = useState('alex.oliveira@hospitalvitalis.com');
  const [especialidade, setEspecialidade] = useState('Cardiologia - Consulta');
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Dados profissionais atualizados com sucesso!');
  };

  return (
    <>
      <Header />
      <div className="form-page-container">
        <div className="form-card">
          <h1 className="form-title">Alterar Dados Profissionais</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome_medico" className="form-label">Nome Completo</label>
              <input 
                id="nome_medico"
                type="text"
                className="form-input"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email_medico" className="form-label">Email de Contato</label>
              <input 
                id="email_medico"
                type="email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="especialidade" className="form-label">Especialidade Principal</label>
              <select 
                id="especialidade"
                className="form-input"
                value={especialidade}
                onChange={(e) => setEspecialidade(e.target.value)}
              >
                <option>Cardiologia - Consulta</option>
                <option>Clínica Geral - Consulta</option>
                <option>Dermatologia - Consulta</option>
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

export default AlterarDadosMedico;