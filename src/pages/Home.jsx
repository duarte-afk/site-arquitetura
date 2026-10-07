import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import Fachada from "../components/Fachada.jsx";
import TituloDuplo from "../components/TituloDuplo.jsx";
import FormContato from "../components/FormContato.jsx";
import { projetos } from "../data/projetos.js";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__texto">
            <p className="hero__rotulo">PROJETO</p>
            <h1 className="hero__titulo">Lorum</h1>
            <p>
              Edifício de uso misto no centro de São Paulo, com fachada em volumes sobrepostos e
              térreo aberto à rua.
            </p>
            <Button to="/projetos/1" variante="escuro">Ver projeto</Button>
          </div>
          <div className="hero__imagem">
            <Fachada cor="#9aa7b2" variante={0} titulo="Projeto Lorum" />
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="container sobre-bloco">
          <div className="sobre-bloco__imagens">
            <div><Fachada cor="#7d9bb3" variante={0} /></div>
            <div><Fachada cor="#a3a8a4" variante={1} /></div>
          </div>
          <div className="sobre-bloco__texto">
            <TituloDuplo leve="Sobre" forte="nós" as="h2" />
            <p>
              Somos um escritório de arquitetura com doze anos de atuação em projetos
              residenciais, comerciais e culturais. Acompanhamos cada obra do primeiro
              desenho à entrega.
            </p>
            <Button to="/sobre" variante="escuro">Saiba mais</Button>
          </div>
        </div>
      </section>

      <section className="secao secao--cinza">
        <div className="container">
          <h2 className="secao__titulo">Foco principal e missão</h2>
          <div className="missao">
            <div className="missao__item">
              <span className="missao__num">1</span>
              <p>
                Desenhar espaços que funcionem bem no dia a dia, com luz natural, ventilação e
                circulação clara para quem os usa.
              </p>
            </div>
            <div className="missao__item">
              <span className="missao__num">2</span>
              <p>
                Entregar obras dentro do orçamento combinado, tomando as decisões de projeto
                junto com o custo de construção.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="container">
          <h2 className="secao__titulo">Nossos projetos</h2>
          <div className="mosaico">
            <Link to="/projetos" className="mosaico__item mosaico__item--texto">
              <span>Projeto<br /><strong>Exemplo</strong></span>
            </Link>
            {projetos.slice(0, 4).map((p, i) => (
              <Link key={p.id} to={`/projetos/${p.id}`} className={`mosaico__item mosaico__item--${i}`} aria-label={p.nome}>
                <Fachada cor={p.cor} variante={p.id} titulo={p.nome} />
              </Link>
            ))}
          </div>
          <div className="mosaico__acao">
            <Button to="/projetos" variante="escuro">Ver todos</Button>
          </div>
        </div>
      </section>

      <section className="secao secao--cinza">
        <div className="container contato-home">
          <div>
            <h2 className="secao__titulo">Fale conosco</h2>
            <FormContato compacto />
          </div>
          <div className="contato-home__imagem" aria-hidden="true">
            <Fachada cor="#8d9aa6" variante={3} />
          </div>
        </div>
      </section>
    </main>
  );
}
