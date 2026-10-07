// Ilustração geométrica que substitui as fotos do protótipo (troque por <img> se tiver as imagens).
const ceus = ["#dbe6ee", "#e8e4dc", "#d5dde3", "#e2e8e0"];

export default function Fachada({ cor = "#9aa7b2", variante = 0, titulo = "" }) {
  const ceu = ceus[variante % ceus.length];
  const composicoes = [
    <>
      <rect x="110" y="30" width="150" height="230" fill="#f4f4f2" />
      <rect x="130" y="60" width="110" height="26" fill={cor} />
      <rect x="130" y="110" width="110" height="26" fill={cor} />
      <rect x="130" y="160" width="110" height="26" fill={cor} />
      <rect x="130" y="210" width="110" height="26" fill={cor} />
    </>,
    <>
      <rect x="50" y="90" width="300" height="170" fill="#f4f4f2" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x={68 + i * 48} y="110" width="30" height="130" fill={cor} />
      ))}
    </>,
    <>
      <path d="M40 260 L40 130 L200 50 L360 130 L360 260 Z" fill="#f4f4f2" />
      <rect x="150" y="170" width="100" height="90" fill={cor} />
    </>,
    <>
      <rect x="60" y="150" width="130" height="110" fill="#f4f4f2" />
      <rect x="190" y="80" width="150" height="180" fill={cor} />
      <rect x="215" y="110" width="100" height="30" fill="#f4f4f2" />
      <rect x="215" y="170" width="100" height="30" fill="#f4f4f2" />
    </>,
  ];
  return (
    <svg
      className="fachada"
      viewBox="0 0 400 300"
      role="img"
      aria-label={titulo ? `Ilustração: ${titulo}` : "Ilustração arquitetônica"}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="300" fill={ceu} />
      {composicoes[variante % composicoes.length]}
      <rect y="260" width="400" height="40" fill="#8d9390" />
    </svg>
  );
}
