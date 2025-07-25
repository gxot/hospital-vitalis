import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/pages/form-page.css';

const AdmMedicosEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [nome, setNome] = useState('');
  const [tipoConsultaId, setTipoConsultaId] = useState('');
  const [localAtendimentoId, setLocalAtendimentoId] = useState('');
  const [tipoAtendimento, setTipoAtendimento] = useState(''); // nome do tipo atual
  const [localAtendimento, setLocalAtendimento] = useState(''); // nome do local atual
  const [tipos, setTipos] = useState<{ id: number, nome: string }[]>([]);
  const [locais, setLocais] = useState<{ id: number, nome: string }[]>([]);
  const [tiposLoaded, setTiposLoaded] = useState(false);
  const [locaisLoaded, setLocaisLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/medicos/listar_dados_medico/' + id, { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        setNome(data.nome);
        setTipoConsultaId(String(data.tipo_consulta_id));
        setLocalAtendimentoId(String(data.local_atendimento_id));
        setTipoAtendimento(data.tipoAtendimento); // nome do tipo
        setLocalAtendimento(data.localAtendimento); // nome do local
      });
  }, [id]);

  // Só carrega tipos quando o select recebe foco
  const handleTipoFocus = () => {
    if (!tiposLoaded) {
      fetch('http://localhost:8080/consulta/tipo_atendimento', { credentials: 'include' })
        .then(res => res.json())
        .then(data => {
          setTipos(data);
          setTiposLoaded(true);
        });
    }
  };

  // Só carrega locais quando o select recebe foco
  const handleLocalFocus = () => {
    if (!locaisLoaded) {
      fetch(`http://localhost:8080/consulta/locais_atendimento`, { credentials: 'include' })
        .then(res => res.json())
        .then(data => {
          setLocais(data);
          setLocaisLoaded(true);
        });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(`http://localhost:8080/medicos/att/${id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: nome,
        tipoAtendimento: Number(tipoConsultaId),
        localAtendimento: Number(localAtendimentoId)
      })
    })
      .then(res => {
        if (res.ok) {
          window.alert('Médico atualizado com sucesso!');
          navigate('/adm/medicos');
        } else {
          window.alert('Erro ao atualizar médico!');
        }
      });
  };

  return (
    <>
      <Header />
      <div className="form-page-container">
        <div className="form-card">
          <h1 className="form-title">Editar Médico</h1>
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
                onFocus={handleTipoFocus}
                required
              >
                {/* Mostra só o atual até o usuário clicar */}
                {!tiposLoaded ? (
                  <option value={tipoConsultaId}>{tipoAtendimento || 'Carregando...'}</option>
                ) : (
                  <>
                    <option value="">Selecione...</option>
                    {tipos.map(tipo => (
                      <option key={tipo.id} value={tipo.id}>{tipo.nome}</option>
                    ))}
                  </>
                )}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Local de Atendimento</label>
              <select
                className="form-input"
                value={localAtendimentoId}
                onChange={e => setLocalAtendimentoId(e.target.value)}
                onFocus={handleLocalFocus}
                required
              >
                {/* Mostra só o atual até o usuário clicar */}
                {!locaisLoaded ? (
                  <option value={localAtendimentoId}>{localAtendimento || 'Carregando...'}</option>
                ) : (
                  <>
                    <option value="">Selecione...</option>
                    {locais.map(local => (
                      <option key={local.id} value={local.id}>{local.nome}</option>
                    ))}
                  </>
                )}
              </select>
            </div>
            <div className="form-group">
              <button type="submit" className="form-button">Salvar Alterações</button>
              <button type="button" className="form-button" style={{ marginLeft: 8 }} onClick={() => navigate('/adm/medicos')}>Cancelar</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdmMedicosEdit;