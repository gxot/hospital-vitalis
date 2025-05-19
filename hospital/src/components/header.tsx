import { Link } from "react-router-dom";
import '../styles/components/navbar.css';


export default function Header() {
    return (
    <nav>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/agendamento">Agendamentos</Link>
        <Link to="/login">Login</Link>
    </nav>
    );
        
}