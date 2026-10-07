import TituloDuplo from "../components/TituloDuplo.jsx";
import Fachada from "../components/Fachada.jsx";
import Button from "../components/Button.jsx";

const equipe = [
  { nome: "Helena Duarte", cargo: "Sócia fundadora" },
  { nome: "Rafael Moura", cargo: "Arquiteto sênior" },
  { nome: "Camila Teixeira", cargo: "Interiores" },
  { nome: "Bruno Lacerda", cargo: "Coordenação de obras" },
];

export default function Sobre() {
  return (
    <main>
      <section className="secao">
        <div className="container sobre-bloco">
          <div className="sobre-bloco__imagens">
            <div><Fachada cor="#7d9bb3" variante={0} /></div>
            <div><Fachada cor="#a3a8a4" variante={1} /></div>
          </div>
          <div className="sobre-bloco__texto">
            <TituloDuplo leve="Sobre" forte="nós" />
            <p>
              O Prumo Arquitetos foi fundado em 2012 por arquitetos que queriam acompanhar cada
              obra de perto. Hoje somos uma equipe de doze pessoas, com projetos entre casas de
              150 m² e edifícios de quase cinco mil.
            </p>
            <p>
              Trabalhamos com materiais simples, estruturas aparentes e espaços que mudam de uso
              ao longo do tempo.
            </p>
          </div>
        </div>
      </section>

      <section className="secao secao--cinza">
        <div className="container">
          <h2 className="secao__titulo">Equipe</h2>
          <div className="equipe">
            {equipe.map((m) => (
              <div key={m.nome} className="membro">
                <div className="membro__avatar" aria-hidden="true">
                  {m.nome.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3>{m.nome}</h3>
                <p>{m.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="container cta">
          <h2 className="secao__titulo">Vamos conversar sobre o seu projeto?</h2>
          <Button to="/contato" variante="escuro">Entrar em contato</Button>
        </div>
      </section>
    </main>
  );
}
