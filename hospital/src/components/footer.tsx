import '../styles/components/footer.css';

export default function Footer() {
    return (
    <footer className="site-footer">
        <div className="footer-content">
            <div className="footer-column">
            <h3>Nossas Políticas</h3>
            <p><a href="#">Política de Privacidade</a></p>
            <p><a href="#">Termos de Uso</a></p>
            </div>

            <div className="footer-column">
            <h3>Contatos</h3>
            <p><a href="mailto:contato@hospitalvitalis.com">contato@hospitalvitalis.com</a></p>
            <p>11 1234-5678</p>
            </div>
        </div>

        <div className="footer-bottom">
            <p>© Hospital Vitalis - 2025 All Rights Reserved.</p>
        </div>
    </footer>
    );
}