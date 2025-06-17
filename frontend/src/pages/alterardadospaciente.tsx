import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/pages/form-page.css';
import { useNavigate } from 'react-router-dom';

const AlterarDadosPaciente: React.FC = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [planoSaude, setPlanoSaude] = useState('');
  const [planos, setPlanos] = useState<{ id: number, nome: string }[]>([]);
  const navigate = useNavigate();

  // Carrega dados do paciente ao montar
  useEffect(() => {
    fetch('http://localhost:8080/details/attuserinfo', { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        setNome(data.nome || '');
        setCpf(data.cpf || '');
        setEmail(data.email || '');
        setDataNascimento(data.dataNascimento || '');
        setPlanoSaude(data.planoSaude || '');
      });
  }, []);

  // Carrega planos de saúde ao montar
  useEffect(() => {
    fetch('http://localhost:8080/planosdesaude/listar_planos_de_saude', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setPlanos(data));
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch('http://localhost:8080/pacientes/atualizar_paciente', {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome,
        email,
        dataNascimento,
        planoSaude
      })
    })
      .then(res => {
        if (res.ok) {
          window.alert('Dados atualizados com sucesso!');
          navigate('/');
        } else {
          window.alert('Erro ao atualizar dados!');
        }
      })
      .catch(() => window.alert('Erro de conexão com o servidor!'));
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
                disabled
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
                className="form-input"
                value={planoSaude}
                onChange={(e) => setPlanoSaude(e.target.value)}
              >
                {planos.map(plano => (
                  <option key={plano.id} value={plano.id}>
                    {plano.nome}
                  </option>
                ))}
                <option value="Particular">Particular</option>
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