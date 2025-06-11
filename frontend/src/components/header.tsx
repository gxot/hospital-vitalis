import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import '../styles/components/header.css';

export default function Header() {
    const [isDoctorMenuOpen, setDoctorMenuOpen] = useState(false);
    const [isPatientMenuOpen, setPatientMenuOpen] = useState(false);

    const toggleDoctorMenu = () => {
        setDoctorMenuOpen(!isDoctorMenuOpen);
        setPatientMenuOpen(false);
    };

    const togglePatientMenu = () => {
        setPatientMenuOpen(!isPatientMenuOpen);
        setDoctorMenuOpen(false);
    };

    const closeMenus = () => {
        setDoctorMenuOpen(false);
        setPatientMenuOpen(false);
    };

    return (
        <header className="site-header">
            <div className="header-container">
                
                <div className="profile-menu">
                    <button 
                        className="profile-button" 
                        onClick={toggleDoctorMenu}
                        aria-expanded={isDoctorMenuOpen}
                    >
                        <img src="/images/medico.png" alt="Médico" className="profile-image" />
                        <span className="profile-text">Dra. Joana</span>
                        <span className="profile-arrow">▼</span>
                    </button>
                    {isDoctorMenuOpen && (
                        <div className='dropdown-menu-open'>
                            <ul>
                            <li>
                                <Link to="/alterardadosmedico" className="dropdown-item">
                                Alterar dados
                                </Link>
                            </li>
                            <li>
                                <Link to="/alterarsenha" className="dropdown-item">
                                Alterar senha
                                </Link>
                            </li>
                            <li>
                                <Link to="/agendamento" className="dropdown-item">
                                Meus agendamentos
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="dropdown-item logout">
                                Sair
                                </Link>
                            </li>
                            </ul>
                        </div>
                        )}
                </div>

                <nav className="main-nav">
                    <ul>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Início</NavLink></li>
                        <li><NavLink to="/sobre" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Sobre</NavLink></li>
                        <li><NavLink to="/agendamento" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Agendamentos</NavLink></li>
                        <li><NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Login</NavLink></li>
                    </ul>
                </nav>

                <div className="profile-menu" onBlur={closeMenus} tabIndex={0}>
                    <button 
                        className="profile-button" 
                        onClick={togglePatientMenu}
                        aria-expanded={isPatientMenuOpen}
                    >
                        <img src="/images/paciente.png" alt="Paciente" className="profile-image" />
                        <span className="profile-text">Mário</span>
                        <span className="profile-arrow">▼</span>
                    </button>
                    {isPatientMenuOpen && (
                        <div className='dropdown-menu-open'>
                            <ul>
                            <li>
                                <Link to="/alterardadospaciente" className="dropdown-item">
                                Alterar dados
                                </Link>
                            </li>
                            <li>
                                <Link to="/alterarsenha" className="dropdown-item">
                                Alterar senha
                                </Link>
                            </li>
                            <li>
                                <Link to="/agendamento" className="dropdown-item">
                                Meus agendamentos
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="dropdown-item logout">
                                Sair
                                </Link>
                            </li>
                            </ul>
                        </div>
                        )}
                </div>

            </div>
        </header>
    );
}
