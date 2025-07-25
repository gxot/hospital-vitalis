import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/pages/consultas_marcadas.css';

const AdmMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="consultas-page-container" style={{ textAlign: 'center' }}>
        <h1 className="consultas-title">Painel do Administrador</h1>
        <button className="form-button" style={{ margin: 16 }} onClick={() => navigate('/adm/medicos')}>
          Listar Médicos
        </button>
        <button className="form-button" style={{ margin: 16 }} onClick={() => navigate('/adm/medicos/novo')}>
          Adicionar Médico
        </button>
      </div>
      <Footer />
    </>
  );
};

export default AdmMenu;