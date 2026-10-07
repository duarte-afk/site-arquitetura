import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/projetos", label: "Projetos" },
  { to: "/galeria", label: "Galeria" },
  { to: "/certificados", label: "Certificados" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

export function Logo({ claro = false }) {
  return (
    <Link to="/" className={`logo ${claro ? "logo--claro" : ""}`} aria-label="Prumo Arquitetos, página inicial">
      <span className="logo__marca">PA</span>
      <span className="logo__nome">Prumo<br />Arquitetos</span>
    </Link>
  );
}

export default function Header() {
  const [aberto, setAberto] = useState(false);
  const fechar = () => setAberto(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />
        <button
          className="header__toggle"
          aria-expanded={aberto}
          aria-controls="menu"
          onClick={() => setAberto((v) => !v)}
        >
          {aberto ? "Fechar" : "Menu"}
        </button>
        <nav id="menu" className={`nav ${aberto ? "nav--aberto" : ""}`} aria-label="Principal">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={fechar}
              className={({ isActive }) => `nav__link ${isActive ? "nav__link--ativo" : ""}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
