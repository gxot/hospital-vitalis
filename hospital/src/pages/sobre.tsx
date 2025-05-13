import React from 'react';
import '../styles/sobre.css';

const Sobre: React.FC = () => {
  const voltarInicio = () => {
    window.location.href = 'inicio.html';
  };

  return (
    <div className="sobre-container">
      <h2>Sobre o Hospital Vitalis</h2>
      <p>
        O Hospital Vitalis é um hospital de referência em cuidados médicos de alta qualidade. Nossa equipe de
        especialistas está comprometida em fornecer tratamentos excepcionais e um atendimento humanizado e tecnologia
        de ponta em todas as nossas diversas especialidades.
      </p>
      <p>
        Nossa missão é salvar vidas, aliviar sofrimento e restaurar a saúde de nossos pacientes. Acreditamos que a
        saúde é um direito fundamental para todos os seres humanos e trabalhamos diariamente para oferecer aos
        pacientes o melhor atendimento possível.
      </p>
      <h3>Nossa Infraestrutura</h3>
      <p>
        O Hospital Vitalis conta com uma infraestrutura moderna para os dias de hoje, com equipamentos de última
        geração e salas de cirurgia equipadas com os melhores profissionais da área da saúde.
      </p>
      <button onClick={voltarInicio}>Voltar para a página inicial</button>
    </div>
  );
};

export default Sobre;
