import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/pages/agendamento.css';
import Header from '../components/header';
import Footer from '../components/footer';

// Ícones SVG
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-event form-field-icon" viewBox="0 0 16 16">
    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
  </svg>
);

const HealthIcon = () => ( // Ícone para plano/especialidade
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-pulse form-field-icon" viewBox="0 0 16 16">
    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.281 8.717 2.01L8 2.748ZM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15Z"/>
    <path d="M10.464 3.314a.5.5 0 0 0-.952-.046L7.924 7.161H6.118a.5.5 0 0 0 0 1h2.164a.5.5 0 0 0 .478-.322l1.49-3.355Z"/>
  </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill form-field-icon" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
    </svg>
);

const PersonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill form-field-icon" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
);


const Agendamento: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('agendar');
  const [formMessage, setFormMessage] = React.useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica de submissão do formulário aqui
    // Exemplo:
    // setFormMessage({ type: 'success', text: 'Seu agendamento foi solicitado com sucesso! Entraremos em contato em breve.' });
    setFormMessage({ type: 'error', text: 'Houve um erro ao processar seu agendamento. Tente novamente.' });
  };

  return (
    <>
      <Header />

      <div className="agendamento-page-container">
        <div className="container my-5 agendamento-form-container">
          <h1 className="agendamento-title">Agende Sua Consulta ou Exame</h1>
          <p className="agendamento-subtitle">
            Utilize o formulário abaixo para encontrar o melhor horário para você.
            Nossa equipe está pronta para oferecer o melhor atendimento.
          </p>
          <p className="agendamento-instructions">
            <i className="bi bi-info-circle-fill"></i> {/* Ícone de informação Bootstrap */}
            Preencha todos os campos obrigatórios (*) para prosseguir.
          </p>

          <div className="tabs mb-4">
            <div
              className={`tab ${activeTab === 'agendar' ? 'active' : ''}`}
              onClick={() => { setActiveTab('agendar'); setFormMessage(null); }}
            >
              Agendar Novo
            </div>
            <div
              className={`tab ${activeTab === 'agendamentos' ? 'active' : ''}`}
              onClick={() => { setActiveTab('agendamentos'); setFormMessage(null); }}
            >
              Meus Agendamentos
            </div>
          </div>

          {formMessage && (
            <div className={`alert alert-${formMessage.type === 'success' ? 'success' : 'danger'} form-feedback`} role="alert">
              {formMessage.text}
            </div>
          )}

          {activeTab === 'agendar' && (
            <form onSubmit={handleSubmit}> 
              <div className="card-custom">
                <div className="form-section-title">
                  <h4>Detalhes do Agendamento</h4>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="planoSaude">
                    <HealthIcon /> Plano de Saúde *
                  </label>
                  <select className="form-select" id="planoSaude" defaultValue="" required>
                    <option disabled value="">Selecione o Plano de Saúde</option>
                    <option>Amil - Advanced Executivo</option>
                    <option>Bradesco Saúde - Top Nacional</option>
                    <option>Unimed - Alfa Premium</option>
                    <option>Particular</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="tipoAgendamento">
                    <HealthIcon /> Tipo de Agendamento *
                  </label>
                  <select className="form-select" id="tipoAgendamento" defaultValue="" required>
                    <option disabled value="">Selecione a Especialidade ou Exame</option>
                    <option>Cardiologia - Consulta</option>
                    <option>Clínica Geral - Consulta</option>
                    <option>Dermatologia - Consulta</option>
                    <option>Raio-X - Exame</option>
                    <option>Ultrassonografia - Exame</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="localAgendamento">
                    <LocationIcon /> Local de Atendimento *
                  </label>
                  <select className="form-select" id="localAgendamento" defaultValue="" required>
                    <option disabled value="">Selecione o Local</option>
                    <option>Hospital Vitalis - Unidade Centro</option>
                    <option>Clínica Vitalis - Unidade Sul</option>
                    <option>Pilar Centro Médico</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="medicoAgendamento">
                    <PersonIcon /> Profissional (Opcional)
                  </label>
                  <select className="form-select" id="medicoAgendamento" defaultValue="">
                    <option value="">Qualquer profissional disponível</option>
                    <option>Dr. Caio De Lacerda Andrade (Cardiologia)</option>
                    <option>Dra. Ana Silva (Clínica Geral)</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="dataConsulta">
                    <CalendarIcon /> Data Desejada *
                  </label>
                  <input type="date" className="form-control" id="dataConsulta" required />
                </div>

                <button type="submit" className="btn btn-custom w-100 mt-4">
                  Buscar Horários Disponíveis
                </button>

                <div className="form-help-text mt-3">
                  <p>
                    Precisa de ajuda ou tem alguma dúvida? <a href="/contato">Entre em contato conosco</a>.
                  </p>
                </div>
              </div>
            </form>
          )}

          {activeTab === 'agendamentos' && (
            <div className="card-custom">
              <h4>Seus Próximos Agendamentos</h4>
              <p className="text-muted">Aqui você poderá visualizar e gerenciar seus agendamentos.</p>
              <div className="alert alert-secondary mt-3" role="alert"> {/* Mudado para alert-secondary */}
                Funcionalidade de "Meus Agendamentos" em desenvolvimento.
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Agendamento;