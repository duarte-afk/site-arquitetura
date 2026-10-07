import { Link } from "react-router-dom";
import { Logo } from "./Header.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Logo claro />
        </div>
        <div>
          <h4>Menu</h4>
          <ul className="footer__lista">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projetos">Projetos</Link></li>
            <li><Link to="/galeria">Galeria</Link></li>
            <li><Link to="/certificados">Certificados</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contato</h4>
          <ul className="footer__lista">
            <li>(11) 4000-1234</li>
            <li>contato@prumoarquitetos.com.br</li>
            <li>Rua das Acácias, 120, São Paulo</li>
          </ul>
        </div>
        <div>
          <h4>Redes sociais</h4>
          <ul className="footer__lista">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      <div className="container footer__base">
        <small>© {new Date().getFullYear()} Prumo Arquitetos. Projeto acadêmico.</small>
      </div>
    </footer>
  );
}
