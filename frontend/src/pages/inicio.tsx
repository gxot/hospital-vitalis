import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/inicio.css';
import Header from '../components/header'; 
import Footer from '../components/footer'; 

// imagem da fachada
const heroBackgroundImage = '/fachada.png';

const Inicio: React.FC = () => {
  return (
    <>
      <Header />

      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Bem-vindo ao Hospital Vitalis</h1>
          <p>
            Atendimento humanizado, profissionais capacitados e tecnologia de ponta para sua saúde.
          </p>
          <Link to="/agendamento" className="btn btn-primary hero-cta">Agende sua Consulta</Link>
        </div>
      </section>

      <section className="services">
        {/* Título da seção usando a classe .section-title para centralização */}
        <h2 className="section-title">Nossos Serviços</h2>
        <div className="services-grid">
          <div className="service">
            <div className="service-icon-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm-.646 5.646a.5.5 0 0 0-.708.708L7.293 10l-1.647 1.646a.5.5 0 0 0 .708.708L8 10.707l1.646 1.647a.5.5 0 0 0 .708-.708L8.707 10l1.647-1.646a.5.5 0 0 0-.708-.708L8 9.293 7.354 6.646z"/>
                <path d="M11 4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V4zM7 2h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
              </svg>
            </div>
            <h3>Pronto Atendimento</h3>
            <p>24 horas por dia, todos os dias da semana, prontos para qualquer emergência.</p>
          </div>
          <div className="service">
            <div className="service-icon-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                 <path d="M1.828 8.9_9a.5.5 0 0 1 0-.707l.586-.586A.5.5 0 0 1 2.757 8H14.5a.5.5 0 0 1 .354.854l-2.147 2.146a.5.5 0 0 1-.707 0L10.354 9.354a.5.5 0 0 1 0-.707l.586-.586a.5.5 0 0 1 .707 0l1.647 1.646V7H6.75a.75.75 0 0 0-.75.75v1.5a.5.5 0 0 1-1 0V7.5A1.75 1.75 0 0 1 6.75 5.75h1.5a.5.5 0 0 1 0-1H6.75A2.75 2.75 0 0 0 4 7.5v1.5a.5.5 0 0 1-.914.405L1.828 8.904Z"/>
                <path d="M4.002 1a2.5 2.5 0 0 0-2.5 2.5v.5A1.5 1.5 0 0 0 3 5.5v5.605a.5.5 0 0 0 .914.405l2.529-2.529a.5.5 0 0 1 .53-.033L8.5 9.874a.5.5 0 0 1 .033.53l-2.529 2.529a.5.5 0 0 0-.405.914H7.5A1.5 1.5 0 0 0 9 12.5v.5a2.5 2.5 0 1 0 0-5v-.5A1.5 1.5 0 0 0 7.5 6h-1A1.5 1.5 0 0 0 5 4.5v-.5A1.5 1.5 0 0 0 3.5 2.5h-.5A1.5 1.5 0 0 0 1.5 4V3.5a2.5 2.5 0 0 0 2.502-2.5h.001Z"/>
              </svg>
            </div>
            <h3>Consultas Especializadas</h3>
            <p>Ampla gama de especialidades, incluindo clínica geral, cardiologia, pediatria e mais.</p>
          </div>
          <div className="service">
            <div className="service-icon-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                <path d="M10.442 1.95a.5.5 0 0 0-.27-.758L7.558.26a.5.5 0 0 0-.517 0L4.425 1.192a.5.5 0 0 0-.27.758L6.98 6.098 2.439 7.874a.5.5 0 0 0-.225.606l.904 2.11A.5.5 0 0 0 3.5 11h9a.5.5 0 0 0 .382-.11l.904-2.11a.5.5 0 0 0-.225-.606L9.022 6.098l2.824-4.148ZM8.562 2.24l1.48 2.178L8.202 6.55 6.72 4.418 8.562 2.24ZM3.69 10l-.76-1.773L7.5 6.79l.888 1.3L6.93 9.224A.5.5 0 0 0 7.382 10H3.69Zm5.048 0L7.28 8.092l.888-1.3L12.732 8.227 11.97 10H8.738Zm.225-1.227L10.442 4.418 11.92 2.24l1.84 2.7L10.022 6.55 8.963 8.773Z"/>
                <path d="M13 12.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 .5.5Z"/>
              </svg>
            </div>
            <h3>Exames e Diagnósticos</h3>
            <p>Laboratório completo e equipamentos de imagem modernos para diagnósticos precisos.</p>
          </div>
        </div>
      </section>

      <section className="about-snippet">
        <div className="container">
          <div className="about-snippet-content">
            <div className="about-snippet-text">
              {/* Título centralizado */}
              <h2 className="section-title about-snippet-title">Compromisso com a Sua Saúde</h2>
              <p>
                No Hospital Vitalis, cada detalhe é pensado para oferecer a você e sua família uma experiência de cuidado
                acolhedora e eficiente. Combinamos a expertise de nossos profissionais com uma infraestrutura moderna
                e um olhar atento às suas necessidades individuais.
              </p>
              <Link to="/sobre" className="btn btn-secondary">Conheça Nossa História</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">Por Que Escolher o Hospital Vitalis?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
              </div>
              <h3>Atendimento Humanizado</h3>
              <p>Cuidado focado no paciente, com empatia e respeito em cada interação.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8c0 3.866-3.134 7-7 7H3c-1.105 0-2-.895-2-2V3c0-1.105.895-2 2-2h6c3.866 0 7 3.134 7 7zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                </svg>
              </div>
              <h3>Equipe Especializada</h3>
              <p>Profissionais altamente qualificados e dedicados à sua saúde e bem-estar.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M10.478 1.647a.5.5 0 0 0-.956-.04L6.958 6.359l-1.3-.945a.5.5 0 0 0-.612.04L2.913 7.75a.5.5 0 0 0 .238.875l2.484.828 1.301 2.773a.5.5 0 0 0 .928-.003l1.533-2.958 2.958-1.533a.5.5 0 0 0 .003-.928L10.478 1.647zM9.5 2.557l1.147 2.211-2.086 1.076L9.5 2.557zm-1.98 4.065 1.076 2.086L6.385 9.855 4.173 8.708 6.444 7.54l1.076-1.18zM8.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                  <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm4.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm2.5-.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm4.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2z"/>
                </svg>
              </div>
              <h3>Tecnologia de Ponta</h3>
              <p>Investimento contínuo em equipamentos modernos para diagnósticos e tratamentos eficazes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">O Que Nossos Pacientes Dizem</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Fui muito bem atendido no Hospital Vitalis. A equipe médica foi atenciosa e demonstrou grande profissionalismo.
                Recomendo a todos!"
              </p>
              <p className="testimonial-author">- João S., Paciente de Cardiologia</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "Minha experiência com o pronto atendimento foi excelente. Rápido, eficiente e com um cuidado
                humanizado que fez toda a diferença."
              </p>
              <p className="testimonial-author">- Maria P., Atendimento de Emergência</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                "A infraestrutura do hospital é impecável e os médicos são muito competentes. Me senti segura
                e bem cuidada durante todo o meu tratamento."
              </p>
              <p className="testimonial-author">- Ana L., Paciente Cirúrgica</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Inicio;