import React from 'react';
import '../styles/pages/inicio.css';
import Header from '../components/header';
import Footer from '../components/footer';

const Inicio: React.FC = () => {
  return (
    <>
      < Header/>

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

      <Footer />
    </>
  );
};

export default Inicio;
