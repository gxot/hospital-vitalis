import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/sobre.css';
import Header from '../components/header';
import Footer from '../components/footer';

// Caminhos para as imagens na pasta 'public'
const hospitalFacadeImage = '/images/fachada.png';        
const hospitalInfraImage = '/images/infraestrutura.png'; 
const hospitalTeamImage = '/images/equipe.png';        

const Sobre: React.FC = () => {
  return (
    <>
      <Header />
      <div className="sobre-page">
        <div className="sobre-hero">
          <img src={hospitalFacadeImage} alt="Fachada do Hospital Vitalis" className="hero-image" />
          <div className="hero-text">
            <h1>Conheça o Hospital Vitalis</h1>
            <p>Excelência e humanização em cada cuidado.</p>
          </div>
        </div>

        <div className="sobre-container">
          <section className="sobre-section" id="missao">
            <h2>Nossa Missão e História</h2>
            <p>
              O Hospital Vitalis nasceu do compromisso de oferecer cuidados médicos de excelência, combinando
              tecnologia de ponta com um atendimento profundamente humanizado. Nossa trajetória é marcada pela
              busca constante pela inovação e pela dedicação em restaurar a saúde e o bem-estar de cada paciente
              que confia em nossos serviços.
            </p>
            <p>
              Nossa missão é ser um centro de referência em saúde, promovendo a vida, aliviando o sofrimento e
              contribuindo ativamente para uma comunidade mais saudável. Acreditamos que a saúde é um bem precioso
              e trabalhamos incansavelmente para que todos tenham acesso a um cuidado digno e eficaz.
            </p>
          </section>

          <section className="sobre-section" id="valores">
            <h2>Nossos Valores</h2>
            <div className="valores-grid">
              <div className="valor-item">
                <i className="fas fa-heartbeat"></i>
                <h3>Empatia</h3>
                <p>Colocamo-nos no lugar de nossos pacientes, oferecendo um cuidado atencioso e acolhedor.</p>
              </div>
              <div className="valor-item">
                <i className="fas fa-medal"></i>
                <h3>Excelência</h3>
                <p>Buscamos os mais altos padrões em todos os nossos procedimentos e tratamentos.</p>
              </div>
              <div className="valor-item">
                <i className="fas fa-lightbulb"></i>
                <h3>Inovação</h3>
                <p>Investimos em tecnologia e conhecimento para oferecer o que há de mais moderno na medicina.</p>
              </div>
              <div className="valor-item">
                <i className="fas fa-users"></i>
                <h3>Integridade</h3>
                <p>Agimos com ética, transparência e respeito em todas as nossas relações.</p>
              </div>
            </div>
          </section>

          <section className="sobre-section" id="infraestrutura">
            <h2>Nossa Infraestrutura</h2>
            <div className="infra-content">
                <img src={hospitalInfraImage} alt="Infraestrutura moderna do Hospital Vitalis" className="section-image"/>
                <p>
                O Hospital Vitalis dispõe de uma infraestrutura moderna e completa, projetada para oferecer segurança e
                conforto aos nossos pacientes. Contamos com equipamentos de diagnóstico de última geração, centros
                cirúrgicos avançados e acomodações pensadas para uma recuperação tranquila e eficaz.
                </p>
            </div>
          </section>

          <section className="sobre-section" id="equipe">
            <h2>Nossa Equipe</h2>
            <div className="equipe-content">
                <p>
                Nosso maior patrimônio é a nossa equipe de profissionais altamente qualificados e dedicados. Médicos,
                enfermeiros, técnicos e colaboradores administrativos trabalham em sinergia, movidos pela paixão por cuidar
                e pelo compromisso com a vida. Investimos continuamente na capacitação e desenvolvimento de nossos talentos.
                </p>
                <img src={hospitalTeamImage} alt="Equipe médica e colaboração no Hospital Vitalis" className="section-image"/>
            </div>
          </section>

          <div className="sobre-actions">
            <Link to="/" className="btn-sobre">Voltar para a Página Inicial</Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Sobre;