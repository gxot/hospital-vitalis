import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/pages/style.css';

const Agendamento: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm px-6 py-3">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold text-primary">Agendamentos</Link>

          <div className="dropdown ms-auto">
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none dropdown-toggle"
              id="userDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://img.icons8.com/?size=100&id=11730&format=png&color=000000"
                alt="Usuário"
                width="50"
                height="50"
                className="rounded-square"
              />
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li><a className="dropdown-item" href="dados_usuario.html">Modificar meus dados cadastrais</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item text-danger" href="login.html">Sair</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container my-5" style={{ maxWidth: '500px' }}>
        <div className="tabs mb-4">
          <div className="tab active">Agendar</div>
          <div className="tab">Agendamentos</div>
        </div>

        <div className="card-custom">
          <div className="mb-3">
            <label className="form-label" htmlFor="planoSaude">Selecione seu plano de saúde</label>
            <select className="form-select" id="planoSaude" defaultValue="">
              <option disabled value="">Plano de Saúde</option>
              <option>Amil - Advanced Executivo</option>
              <option>Bradesco Saúde - Top Nacional</option>
              <option>Unimed - Alfa Premium</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">O que você quer agendar?</label>
            <select className="form-select" defaultValue="">
              <option disabled value="">Especialidade</option>
              <option>Cardiologia: Cardiologia</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Onde quer marcar?</label>
            <select className="form-select" defaultValue="">
              <option disabled value="">Local</option>
              <option>Pilar Centro Médico</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Sabe com quem marcar?</label>
            <select className="form-select" defaultValue="">
              <option disabled value="">Médico</option>
              <option>Caio De Lacerda Andrade</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Data da consulta:</label>
            <input type="date" className="form-control" defaultValue="2025-04-14" />
          </div>

          <button className="btn btn-custom w-100">Agendar</button>
        </div>
      </div>
    </>
  );
};

export default Agendamento;
