# Prumo Arquitetos | Site de arquitetura

Projeto da atividade **Recuperação - 3º bimestre**: recriação de um site de escritório de arquitetura com **React + Vite + React Router**, inspirado no protótipo do Figma indicado no enunciado.

## Integrantes

- Nome do integrante 1
- Nome do integrante 2
- Nome do integrante 3
- Nome do integrante 4

## Tecnologias

- React 18
- Vite 5
- React Router DOM 6
- CSS puro (responsivo, sem bibliotecas de UI)

## Rotas

| Rota             | Página                | Descrição                                      |
| ---------------- | --------------------- | ---------------------------------------------- |
| `/`              | Home                  | Apresentação, projetos em destaque e serviços  |
| `/projetos`      | Projetos              | Lista de projetos com filtro por categoria     |
| `/projetos/:id`  | Detalhes do Projeto   | Rota dinâmica, lê o `id` com `useParams`       |
| `/galeria`       | Galeria               | Grade de imagens (página extra do protótipo)   |
| `/certificados`  | Certificados          | Certificações do escritório (página extra)     |
| `/sobre`         | Sobre                 | História e equipe                              |
| `/contato`       | Contato               | Formulário com validação                       |
| `*`              | Não encontrado        | Página 404                                     |

## Como funciona a rota dinâmica

Os projetos ficam em `src/data/projetos.js`. Cada card usa `<Link to={`/projetos/${id}`}>`. A página `ProjetoDetalhes` lê o parâmetro com `useParams()`, busca o projeto e mostra uma mensagem caso o `id` não exista. Também há navegação para o projeto anterior e o próximo.

## Estrutura

```
src/
  components/   Header, Footer, Button, ProjectCard, TituloDuplo, FormContato, Fachada, Planta, ScrollToTop
  pages/        Home, Projetos, ProjetoDetalhes, Galeria, Certificados, Sobre, Contato, NaoEncontrado
  data/         projetos.js
  styles/       global.css
  App.jsx       definição das rotas
  main.jsx      BrowserRouter
```

## Recursos adicionais

- `NavLink` com destaque na página ativa
- Página 404 (`path="*"`)
- `ScrollToTop` ao trocar de rota
- Galeria e Certificados, páginas presentes no protótipo
- Formulário reutilizável (Home e Contato)
- Validação do formulário de contato
- Menu mobile e layout responsivo (breakpoints em 960px, 820px e 600px)
- Arquivos `vercel.json` e `public/_redirects` para que as rotas funcionem ao recarregar a página após o deploy

## Como executar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:5173).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```
