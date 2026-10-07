export const categorias = ["Todos", "Residencial", "Comercial", "Cultural"];

export const projetos = [
  {
    id: 1,
    nome: "Casa Pátio",
    categoria: "Residencial",
    local: "Cotia, SP",
    ano: 2024,
    area: "320 m²",
    cor: "#9aa7b2",
    descricao:
      "Residência organizada em torno de um pátio central que traz luz e ventilação natural para todos os ambientes. A estrutura em concreto aparente contrasta com os painéis de madeira das áreas íntimas.",
  },
  {
    id: 2,
    nome: "Edifício Vão",
    categoria: "Comercial",
    local: "São Paulo, SP",
    ano: 2023,
    area: "4.800 m²",
    cor: "#5d6b75",
    descricao:
      "Edifício de escritórios com planta livre e fachada de brises metálicos que controlam a incidência solar. O térreo é aberto à calçada e abriga uma praça coberta.",
  },
  {
    id: 3,
    nome: "Biblioteca do Bairro",
    categoria: "Cultural",
    local: "Osasco, SP",
    ano: 2022,
    area: "1.250 m²",
    cor: "#a08d78",
    descricao:
      "Biblioteca pública com salas de leitura em diferentes alturas e uma grande cobertura em shed que ilumina o acervo sem ofuscar a leitura.",
  },
  {
    id: 4,
    nome: "Casa Varanda",
    categoria: "Residencial",
    local: "Ibiúna, SP",
    ano: 2023,
    area: "210 m²",
    cor: "#b0856a",
    descricao:
      "Casa de campo com uma varanda contínua que funciona como sala externa. A estrutura em madeira laminada foi pré-fabricada e montada em três semanas.",
  },
  {
    id: 5,
    nome: "Loja Rua Aberta",
    categoria: "Comercial",
    local: "Campinas, SP",
    ano: 2021,
    area: "380 m²",
    cor: "#6f8f7d",
    descricao:
      "Reforma de uma loja de rua que removeu o fechamento frontal e transformou a fachada em uma grande vitrine de portas de correr.",
  },
  {
    id: 6,
    nome: "Pavilhão da Escola",
    categoria: "Cultural",
    local: "Barueri, SP",
    ano: 2025,
    area: "640 m²",
    cor: "#c2a25a",
    descricao:
      "Pavilhão multiuso para uma escola pública, com estrutura leve e vedações removíveis que permitem usar o espaço como quadra, auditório ou feira.",
  },
];

export function buscarProjeto(id) {
  return projetos.find((p) => p.id === Number(id));
}
