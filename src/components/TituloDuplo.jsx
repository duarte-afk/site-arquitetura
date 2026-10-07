// Título em duas linhas, como no protótipo: palavra leve em cima, palavra em negrito embaixo.
export default function TituloDuplo({ leve, forte, as: Tag = "h1" }) {
  return (
    <Tag className="titulo-duplo">
      <span className="titulo-duplo__leve">{leve}</span>
      <span className="titulo-duplo__forte">{forte}</span>
    </Tag>
  );
}
