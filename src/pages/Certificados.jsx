import TituloDuplo from "../components/TituloDuplo.jsx";

const certificados = [
  { nome: "Registro no CAU/SP", texto: "Escritório registrado e em dia com o conselho de arquitetura." },
  { nome: "Processo AQUA-HQE", texto: "Experiência em projetos com certificação de alta qualidade ambiental." },
  { nome: "Selo Procel Edifica", texto: "Projetos com classificação de eficiência energética." },
];

export default function Certificados() {
  return (
    <main className="secao">
      <div className="container">
        <TituloDuplo leve="Nossos" forte="Certificados" />
        <ul className="certificados">
          {certificados.map((c) => (
            <li key={c.nome}>
              <h3>{c.nome}</h3>
              <p>{c.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
