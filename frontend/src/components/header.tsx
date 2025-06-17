import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import useAuth from '../hooks/useAuth'; // Corrigido o import
import '../styles/components/header.css';

export default function Header() {
    const [isPatientMenuOpen, setPatientMenuOpen] = useState(false);
    const { user, loading, logout } = useAuth();

    const togglePatientMenu = () => {
        setPatientMenuOpen(!isPatientMenuOpen);
    };

    const closeMenus = () => {
        setPatientMenuOpen(false);
    };

    if (loading) return null; // ou um spinner

    return (
        <header className="site-header">
            <div className="header-container">

                <nav className="main-nav">
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                Início
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sobre" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                Sobre
                            </NavLink>
                        </li>
                        {!user && (
                            <li>
                                <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Login
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </nav>

                {user && (
                    <div className="profile-menu">
                        <button 
                            className="profile-button" 
                            onClick={togglePatientMenu}
                            aria-expanded={isPatientMenuOpen}
                        >
                            <img src="/images/paciente.png" alt="Paciente" className="profile-image" />
                            <span className="profile-text">{user.nome || user.email || "Paciente"}</span>
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
                                            Agendar Consulta
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/meusagendamentos" className="dropdown-item">
                                            Meus Agendamentos
                                        </Link>
                                    </li>
                                    <li>
                                        <button onClick={logout} className="dropdown-item logout">
                                            Sair
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                )}

            </div>
        </header>
    );
}