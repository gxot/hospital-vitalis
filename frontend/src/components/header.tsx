import React from 'react';
import { Link, NavLink } from "react-router-dom"; // Usar NavLink para estilizar link ativo
import '../styles/components/header.css';

export default function Header() {
    return (
        <header className="site-header">
            <div className="header-container"> {/* Para controlar a largura e centralização */}
                <nav className="main-nav">
                    <ul>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Início</NavLink></li>
                        <li><NavLink to="/sobre" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Sobre</NavLink></li>
                        <li><NavLink to="/agendamento" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Agendamentos</NavLink></li>
                        <li><NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Login</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}