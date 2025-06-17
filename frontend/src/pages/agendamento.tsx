import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/pages/agendamento.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';

// Tipos
interface TipoAtendimento {
  id: number;
  nome: string;
}
interface LocalAtendimento {
  id: number;
  nome: string;
}
interface Medico {
  id: number;
  nome: string;
  especialidade: string;
}
type FormMessage = { type: 'success' | 'error'; text: string } | null;

const HealthIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-pulse form-field-icon" viewBox="0 0 16 16">
    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.281 8.717 2.01L8 2.748ZM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15Z"/>
    <path d="M10.464 3.314a.5.5 0 0 0-.952-.046L7.924 7.161H6.118a.5.5 0 0 0 0 1h2.164a.5.5 0 0 0 .478-.322l1.49-3.355Z"/>
  </svg>
);
const LocationIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill form-field-icon" viewBox="0 0 16 16">
    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
  </svg>
);
const PersonIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill form-field-icon" viewBox="0 0 16 16">
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  </svg>
);
const CalendarIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-event form-field-icon" viewBox="0 0 16 16">
    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
  </svg>
);

const AgendamentoWizard: React.FC = () => {

  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Estados dos selects
  const [tipos, setTipos] = useState<TipoAtendimento[]>([]);
  const [locais, setLocais] = useState<LocalAtendimento[]>([]);
  const [medicos, setMedicos] = useState<Medico[]>([]);

  // Seleções
  const [tipoSelecionado, setTipoSelecionado] = useState<number | null>(null);
  const [localSelecionado, setLocalSelecionado] = useState<number | null>(null);
  const [medicoSelecionado, setMedicoSelecionado] = useState<number | null>(null);
  const [dataConsultaa, setDataConsulta] = useState<string>('');

  const [formMessage, setFormMessage] = useState<FormMessage>(null);

  // Carrega tipos no início
  useEffect(() => {
    fetch('http://localhost:8080/consulta/tipo_atendimento', {
      credentials: 'include'
      })
      .then(res => res.json())
      .then(setTipos);
  }, []);

  // Carrega locais ao avançar para o passo 2
  useEffect(() => {
    if (step === 2 && tipoSelecionado) {
      fetch(`http://localhost:8080/consulta/locais?tipo=${tipoSelecionado}`, {
      credentials: 'include'
      })
        .then(res => res.json())
        .then(setLocais);
    }
  }, [step, tipoSelecionado]);

  // Carrega médicos ao avançar para o passo 3
  useEffect(() => {
    if (step === 3 && tipoSelecionado && localSelecionado) {
      fetch(`http://localhost:8080/consulta/medicos?tipo=${tipoSelecionado}&local=${localSelecionado}`, {
      credentials: 'include'
      })
      
        .then(res => res.json())
        .then(setMedicos);
    }
  }, [step, tipoSelecionado, localSelecionado]);

  // Limpa mensagens ao trocar de passo
  useEffect(() => {
    setFormMessage(null);
  }, [step]);

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormMessage(null);

    fetch('http://localhost:8080/consulta/agendar', {
      method: 'POST',
      credentials: "include",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tipoId: tipoSelecionado,
        localId: localSelecionado,
        medicoId: medicoSelecionado,
        dataConsulta: dataConsultaa
      })
    })
      .then(async res => {
        if (res.ok) {
          window.alert('Agendamento realizado com sucesso!');
          navigate('/'); // <-- só funciona se dentro de <BrowserRouter>
        } else {
          const text = await res.text();
          setFormMessage({ type: 'error', text: text || 'Erro ao agendar.' });
        }
      })
      .catch(() => setFormMessage({ type: 'error', text: 'Erro de conexão com o servidor.' }));
  };

  return (
    <>
      <Header />
      <div className="agendamento-page-container">
        <div className="container my-5 agendamento-form-container">
          <h1 className="agendamento-title">Agende Sua Consulta ou Exame</h1>
          <p className="agendamento-subtitle">
            Utilize o assistente abaixo para agendar sua consulta ou exame.
          </p>
          <div className="card-custom" style={{ maxWidth: 500, margin: '0 auto' }}>
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <>
                  <div className="form-section-title">
                    <h4><HealthIcon /> Tipo da Consulta *</h4>
                  </div>
                  <select
                    className="form-select mb-4"
                    value={tipoSelecionado ?? ''}
                    onChange={e => setTipoSelecionado(Number(e.target.value))}
                    required
                  >
                    <option value="" disabled>Selecione o tipo de consulta</option>
                    {tipos.map(tipo => (
                      <option key={tipo.id} value={tipo.id}>{tipo.nome}</option>
                    ))}
                  </select>
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-custom"
                      disabled={!tipoSelecionado}
                      onClick={handleNext}
                    >
                      Próximo
                    </button>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="form-section-title">
                    <h4><LocationIcon /> Local de Atendimento *</h4>
                  </div>
                  <select
                    className="form-select mb-4"
                    value={localSelecionado ?? ''}
                    onChange={e => setLocalSelecionado(Number(e.target.value))}
                    required
                  >
                    <option value="" disabled>Selecione o local</option>
                    {locais.map(local => (
                      <option key={local.id} value={local.id}>{local.nome}</option>
                    ))}
                  </select>
                  <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-secondary" onClick={handleBack}>Voltar</button>
                    <button
                      type="button"
                      className="btn btn-custom"
                      disabled={!localSelecionado}
                      onClick={handleNext}
                    >
                      Próximo
                    </button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="form-section-title">
                    <h4><PersonIcon /> Profissional *</h4>
                  </div>
                  <select
                    className="form-select mb-4"
                    value={medicoSelecionado ?? ''}
                    onChange={e => setMedicoSelecionado(Number(e.target.value))}
                    required
                  >
                    <option value="" disabled>Selecione o profissional</option>
                    {medicos.map(medico => (
                      <option key={medico.id} value={medico.id}>
                        {medico.nome}
                      </option>
                    ))}
                  </select>
                  <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-secondary" onClick={handleBack}>Voltar</button>
                    <button
                      type="button"
                      className="btn btn-custom"
                      disabled={!medicoSelecionado}
                      onClick={handleNext}
                    >
                      Próximo
                    </button>
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <div className="form-section-title">
                    <h4><CalendarIcon /> Data Desejada *</h4>
                  </div>
                  <input
                    type="date"
                    className="form-control mb-4"
                    value={dataConsultaa}
                    onChange={e => setDataConsulta(e.target.value)}
                    required
                  />
                  <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-secondary" onClick={handleBack}>Voltar</button>
                    <button type="submit" className="btn btn-custom">Agendar</button>
                  </div>
                </>
              )}
            </form>
            {formMessage && (
              <div className={`alert alert-${formMessage.type === 'success' ? 'success' : 'danger'} form-feedback mt-3`} role="alert">
                {formMessage.text}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AgendamentoWizard;