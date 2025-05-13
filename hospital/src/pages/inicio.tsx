import React from 'react';
import '../styles/inicio.css';

const Inicio: React.FC = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src="logo.png" alt="Lugar da logo" />
        </div>
      </header>

      <nav>
        <a href="#">Início</a>
        <a href="sobre.html">Sobre</a>
        <a href="agendamento.html">Agendamentos</a>
        <a href="login.html">Login</a>
      </nav>

      <section className="hero">
        <h1>Bem-vindo ao Hospital Vitalis</h1>
        <p>
          Atendimento humanizado, profissionais capacitados e tecnologia de ponta para sua saúde.
        </p>
      </section>

      <section className="services">
        <div className="service">
          <h3>Pronto Atendimento</h3>
          <p>24 horas por dia, todos os dias da semana.</p>
        </div>
        <div className="service">
          <h3>Consultas Especializadas</h3>
          <p>Clínica geral, cardiologia, pediatria e muito mais.</p>
        </div>
        <div className="service">
          <h3>Exames e Diagnósticos</h3>
          <p>Laboratório completo e equipamentos modernos.</p>
        </div>
      </section>

      <footer
        style={{
          backgroundColor: '#066a75',
          color: '#fff',
          padding: '40px 0',
          fontFamily: 'Arial, sans-serif',
          marginTop: '200px'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {/* Coluna Nossas Políticas */}
          <div style={{ flex: 1, margin: '0 20px' }}>
            <h3 style={{ borderBottom: '2px solid #ffffff', paddingBottom: '10px' }}>Nossas Políticas</h3>
            <p>
              <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Política de Privacidade</a>
            </p>
            <p>
              <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Termos de Uso</a>
            </p>
          </div>

          {/* Coluna Contatos */}
          <div style={{ flex: 1, margin: '0 20px' }}>
            <h3 style={{ borderBottom: '2px solid #ffffff', paddingBottom: '10px' }}>Contatos</h3>
            <p>
              <a href="mailto:contato@hospitalvitalis.com" style={{ color: '#fff', textDecoration: 'none' }}>
                contato@hospitalvitalis.com
              </a>
            </p>
            <p>11 1234-5678</p>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '40px',
            borderTop: '1px solid #ffffff',
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <p style={{ margin: 0 }}>© Hospital Vitalis - 2025 All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Inicio;
