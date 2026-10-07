import TituloDuplo from "../components/TituloDuplo.jsx";
import FormContato from "../components/FormContato.jsx";

function Mapa() {
  return (
    <svg className="mapa" viewBox="0 0 400 300" role="img" aria-label="Mapa ilustrativo da localização do escritório">
      <rect width="400" height="300" fill="#e9ecea" />
      <g stroke="#fff" strokeWidth="10" fill="none">
        <path d="M0 80 L400 120" /><path d="M0 210 L400 190" />
        <path d="M110 0 L150 300" /><path d="M290 0 L260 300" />
      </g>
      <rect x="170" y="130" width="60" height="40" fill="#c9d3cc" />
      <circle cx="200" cy="145" r="10" fill="#c0392b" />
    </svg>
  );
}

export default function Contato() {
  return (
    <main className="secao">
      <div className="container">
        <TituloDuplo leve="Informações de" forte="Contato" />
        <div className="contato__grid">
          <div>
            <dl className="contato__lista">
              <div><dt>Endereço</dt><dd>Rua das Acácias, 120<br />Vila Madalena, São Paulo, SP</dd></div>
              <div><dt>Telefone</dt><dd>(11) 4000-1234</dd></div>
              <div><dt>E-mail</dt><dd>contato@prumoarquitetos.com.br</dd></div>
              <div><dt>Atendimento</dt><dd>Segunda a sexta, das 9h às 18h</dd></div>
            </dl>
            <FormContato />
          </div>
          <div className="contato__mapa"><Mapa /></div>
        </div>
      </div>
    </main>
  );
}
