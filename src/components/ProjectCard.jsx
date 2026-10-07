import { Link } from "react-router-dom";
import Fachada from "./Fachada.jsx";
import Button from "./Button.jsx";

// Linha de projeto: imagem à esquerda e cartão branco à direita (página Projetos).
export default function ProjectCard({ projeto }) {
  return (
    <article className="proj-linha">
      <Link to={`/projetos/${projeto.id}`} className="proj-linha__imagem" aria-label={`Ver projeto ${projeto.nome}`}>
        <Fachada cor={projeto.cor} variante={projeto.id} titulo={projeto.nome} />
      </Link>
      <div className="proj-linha__cartao">
        <h3>{projeto.nome}</h3>
        <p>{projeto.descricao}</p>
        <Button to={`/projetos/${projeto.id}`} variante="contorno">Ver projeto</Button>
      </div>
    </article>
  );
}
