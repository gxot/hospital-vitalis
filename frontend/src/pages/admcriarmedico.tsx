import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/form-page.css';

const AdmMedicosAdd: React.FC = () => {
  const [nome, setNome] = useState('');
  const [tipoConsultaId, setTipoConsultaId] = useState('');
  const [localAtendimentoId, setLocalAtendimentoId] = useState('');
  const [tipos, setTipos] = useState<{ id: number, nome: string }[]>([]);
  const [locais, setLocais] = useState<{ id: number, nome: string }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/consulta/tipo_atendimento', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setTipos(data));
    fetch('http://localhost:8080/consulta/locais_atendimento', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setLocais(data));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('http://localhost:8080/medicos/criar_medico', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: nome,
        tipo_consulta_id: Number(tipoConsultaId),
        local_atendimento_id: Number(localAtendimentoId)
      })
    })
      .then(res => {
        if (res.ok) {
          window.alert('Médico cadastrado com sucesso!');
          navigate('/adm/medicos');
        } else {
          window.alert('Erro ao cadastrar médico!');
        }
      });
  };

  return (
    <>
      <Header />
      <div className="form-page-container">
        <div className="form-card">
          <h1 className="form-title">Adicionar Médico</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Nome do Médico</label>
              <input
                type="text"
                className="form-input"
                value={nome}
                onChange={e => setNome(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Tipo de Consulta</label>
              <select
                className="form-input"
                value={tipoConsultaId}
                onChange={e => setTipoConsultaId(e.target.value)}
                required
              >
                <option value="">Selecione...</option>
                {tipos.map(tipo => (
                  <option key={tipo.id} value={tipo.id}>{tipo.nome}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Local de Atendimento</label>
              <select
                className="form-input"
                value={localAtendimentoId}
                onChange={e => setLocalAtendimentoId(e.target.value)}
                required
              >
                <option value="">Selecione...</option>
                {locais.map(local => (
                  <option key={local.id} value={local.id}>{local.nome}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <button type="submit" className="form-button">Cadastrar</button>
              <button type="button" className="form-button" style={{ marginLeft: 8 }} onClick={() => navigate('/adm/medicos')}>Cancelar</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdmMedicosAdd;