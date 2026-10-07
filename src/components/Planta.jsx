// Planta baixa simplificada (hexágono dividido), como nas plantas do protótipo.
export default function Planta() {
  return (
    <svg className="planta" viewBox="0 0 200 180" role="img" aria-label="Planta baixa do projeto">
      <g fill="none" stroke="#333" strokeWidth="2">
        <polygon points="50,20 150,20 190,90 150,160 50,160 10,90" />
        <line x1="50" y1="20" x2="150" y2="160" strokeWidth="1" />
        <line x1="150" y1="20" x2="50" y2="160" strokeWidth="1" />
        <line x1="10" y1="90" x2="190" y2="90" strokeWidth="1" />
      </g>
    </svg>
  );
}
