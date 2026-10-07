import TituloDuplo from "../components/TituloDuplo.jsx";
import Fachada from "../components/Fachada.jsx";

const cores = ["#9aa7b2", "#b0856a", "#6f8f7d", "#8d8fb0", "#c2a25a", "#7d9bb3"];

export default function Galeria() {
  return (
    <main className="secao">
      <div className="container">
        <TituloDuplo leve="Nossa" forte="Galeria" />
        <div className="galeria">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="galeria__item">
              <Fachada cor={cores[i % cores.length]} variante={i} titulo={`Imagem ${i + 1} da galeria`} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
