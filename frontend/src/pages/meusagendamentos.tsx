import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/pages/consultas_marcadas.css';

interface ConsultaMarcadaDTO {
  id: number;
  tipoNome: string;
  localNome: string;
  medicoNome: string;
  dataConsulta: string; // Ex: "2026-12-01"
}

function formatarDataBR(dataISO: string) {
  if (!dataISO) return '';
  const [ano, mes, dia] = dataISO.split('-');
  return `${dia}/${mes}/${ano}`;
}

const ConsultasMarcadas: React.FC = () => {
  const [consultas, setConsultas] = useState<ConsultaMarcadaDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletando, setDeletando] = useState<number | null>(null);

  const carregarConsultas = () => {
    setLoading(true);
    fetch('http://localhost:8080/consulta/agendamentos', { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        setConsultas(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    carregarConsultas();
  }, []);

  const deletarConsulta = (id: number) => {
    if (!window.confirm('Tem certeza que deseja cancelar esta consulta?')) return;
    setDeletando(id);
    fetch(`http://localhost:8080/consulta/delete/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          setConsultas(consultas.filter(c => c.id !== id));
        } else {
          window.alert('Erro ao cancelar a consulta.');
        }
        setDeletando(null);
      })
      .catch(() => {
        window.alert('Erro de conexão ao cancelar.');
        setDeletando(null);
      });
  };

  return (
    <>
      <Header />
      <div className="consultas-page-container">
        <h1 className="consultas-title">Minhas Consultas Marcadas</h1>
        <p className="consultas-subtitle">
          Veja abaixo todas as suas consultas e exames agendados.
        </p>

        {loading ? (
          <div style={{ textAlign: 'center', marginTop: 40 }}>Carregando...</div>
        ) : consultas.length === 0 ? (
          <div className="consulta-card" style={{ textAlign: 'center', marginTop: 40 }}>
            <span>Nenhuma consulta marcada encontrada.</span>
          </div>
        ) : (
          <div className="consulta-card-list">
            {consultas.map(consulta => (
              <div className="consulta-card" key={consulta.id}>
                <div className="consulta-card-title">
                  <span className="consulta-icon" role="img" aria-label="Consulta">🩺</span>
                  {consulta.tipoNome}
                </div>
                <div className="consulta-card-info">
                  <strong>Data:</strong> {formatarDataBR(consulta.dataConsulta)}
                </div>
                <div className="consulta-card-info">
                  <strong>Local:</strong> {consulta.localNome}
                </div>
                <div className="consulta-card-info">
                  <strong>Profissional:</strong> {consulta.medicoNome}
                </div>
                <div style={{ marginTop: 16, textAlign: 'right' }}>
                  <button
                    className="btn btn-danger"
                    style={{ minWidth: 120 }}
                    disabled={deletando === consulta.id}
                    onClick={() => deletarConsulta(consulta.id)}
                  >
                    {deletando === consulta.id ? 'Cancelando...' : 'Cancelar'}
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

export default ConsultasMarcadas;