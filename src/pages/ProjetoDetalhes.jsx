import { useParams, Link } from "react-router-dom";
import { buscarProjeto, projetos } from "../data/projetos.js";
import Fachada from "../components/Fachada.jsx";
import Planta from "../components/Planta.jsx";
import Button from "../components/Button.jsx";
import TituloDuplo from "../components/TituloDuplo.jsx";

export default function ProjetoDetalhes() {
  const { id } = useParams();
  const projeto = buscarProjeto(id);

  if (!projeto) {
    return (
      <main className="secao">
        <div className="container vazio">
          <TituloDuplo leve="Projeto" forte="não encontrado" />
          <p>Não existe um projeto com o código “{id}”.</p>
          <Button to="/projetos" variante="escuro">Voltar aos projetos</Button>
        </div>
      </main>
    );
  }

  const indice = projetos.findIndex((p) => p.id === projeto.id);
  const anterior = projetos[(indice - 1 + projetos.length) % projetos.length];
  const proximo = projetos[(indice + 1) % projetos.length];

  return (
    <main className="secao">
      <div className="container">
        <Link to="/projetos" className="voltar">Voltar aos projetos</Link>
        <TituloDuplo leve="Projeto" forte={projeto.nome} />

        <div className="detalhe__principal">
          <Fachada cor={projeto.cor} variante={projeto.id} titulo={projeto.nome} />
        </div>

        <div className="detalhe__meio">
          <div className="detalhe__miniatura">
            <Fachada cor={projeto.cor} variante={projeto.id + 1} />
          </div>
          <div>
            <p>{projeto.descricao}</p>
            <dl className="ficha">
              <div><dt>Categoria</dt><dd>{projeto.categoria}</dd></div>
              <div><dt>Local</dt><dd>{projeto.local}</dd></div>
              <div><dt>Ano</dt><dd>{projeto.ano}</dd></div>
              <div><dt>Área</dt><dd>{projeto.area}</dd></div>
            </dl>
          </div>
        </div>

        <div className="detalhe__plantas">
          <Planta />
          <Planta />
        </div>

        <nav className="detalhe__nav" aria-label="Outros projetos">
          <Link to={`/projetos/${anterior.id}`}>Anterior: {anterior.nome}</Link>
          <Link to={`/projetos/${proximo.id}`}>Próximo: {proximo.nome}</Link>
        </nav>
      </div>
    </main>
  );
}
