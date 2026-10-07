import TituloDuplo from "../components/TituloDuplo.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projetos } from "../data/projetos.js";

export default function Projetos() {
  return (
    <main className="secao">
      <div className="container">
        <TituloDuplo leve="Nossos" forte="Projetos" />
        <div className="proj-lista">
          {projetos.map((p) => (
            <ProjectCard key={p.id} projeto={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
