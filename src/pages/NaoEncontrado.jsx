import Button from "../components/Button.jsx";
import TituloDuplo from "../components/TituloDuplo.jsx";

export default function NaoEncontrado() {
  return (
    <main className="secao">
      <div className="container vazio">
        <TituloDuplo leve="Página" forte="não encontrada" />
        <p>O endereço que você abriu não existe neste site.</p>
        <Button to="/" variante="escuro">Ir para a Home</Button>
      </div>
    </main>
  );
}
