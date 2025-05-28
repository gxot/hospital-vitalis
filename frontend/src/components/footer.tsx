import React from 'react';
import { Link } from 'react-router-dom'; // Para links internos
import '../styles/components/footer.css';

// Ícones SVG
const PhoneIcon = () => <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>;
const EmailIcon = () => <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>;
const LocationIcon = () => <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>;

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-main-content">
                    <div className="footer-column about-column">
                        <h3>Hospital Vitalis</h3>
                        <p className="footer-about-text">
                            Oferecendo cuidados médicos de excelência com atendimento humanizado e tecnologia de ponta.
                            Sua saúde é nossa prioridade.
                        </p>
                    </div>

                    <div className="footer-column links-column">
                        <h3>Links Rápidos</h3>
                        <ul>
                            <li><Link to="/sobre">Sobre Nós</Link></li>
                            <li><Link to="/agendamento">Agendamentos</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column contact-column">
                        <h3>Entre em Contato</h3>
                        <address>
                            <p><LocationIcon /> Rua das Palmeiras, 123 - Centro<br/>Cidade Exemplo, UF - CEP 00000-000</p>
                            <p><PhoneIcon /> <a href="tel:+551112345678">(41) 99234-5678</a></p>
                            <p><EmailIcon /> <a href="mailto:contato@hospitalvitalis.com">contato@hospitalvitalis.com</a></p>
                        </address>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Hospital Vitalis. Todos os direitos reservados.</p>
                    <p className="footer-dev-note">
                        <Link to="/politica-de-privacidade">Política de Privacidade</Link> | <Link to="/termos-de-uso">Termos de Uso</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}