import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/pages/consultas_marcadas.css';

interface Medico {
  id: number;
  nome: string;
  tipoAtendimento: string;
  localAtendimento: string;
}

const AdmMedicosList: React.FC = () => {
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/medicos/listar_medicos', { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        setMedicos(data);
        setLoading(false);
      });
  }, []);

  const deletarMedico = (id: number) => {
    if (!window.confirm('Tem certeza que deseja deletar este médico?')) return;
    fetch(`http://localhost:8080/medicos/delete/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setMedicos(medicos.filter(m => m.id !== id));
        } else {
          window.alert('Erro ao deletar médico.');
        }
      });
  };

  return (
    <>
      <Header />
      <div className="consultas-page-container">
        <h1 className="consultas-title">Médicos Cadastrados</h1>
        {loading ? (
          <div style={{ textAlign: 'center', marginTop: 40 }}>Carregando...</div>
        ) : medicos.length === 0 ? (
          <div className="consulta-card" style={{ textAlign: 'center', marginTop: 40 }}>
            <span>Nenhum médico cadastrado.</span>
          </div>
        ) : (
          <div className="consulta-card-list">
            {medicos.map(medico => (
              <div className="consulta-card" key={medico.id}>
                <div className="consulta-card-title">
                  {medico.nome}
                </div>
                <div className="consulta-card-info">
                  <strong>Tipo de Consulta:</strong> {medico.tipoAtendimento}
                </div>
                <div className="consulta-card-info">
                  <strong>Local de Atendimento:</strong> {medico.localAtendimento}
                </div>
                <div style={{ marginTop: 16, textAlign: 'right' }}>
                  <button
                    className="btn"
                    style={{ marginRight: 8 }}
                    onClick={() => navigate(`/adm/medicos/editar/${medico.id}`)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deletarMedico(medico.id)}
                  >
                    Deletar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AdmMedicosList;