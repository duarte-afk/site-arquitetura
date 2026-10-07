import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import Projetos from "./pages/Projetos.jsx";
import ProjetoDetalhes from "./pages/ProjetoDetalhes.jsx";
import Sobre from "./pages/Sobre.jsx";
import Contato from "./pages/Contato.jsx";
import Galeria from "./pages/Galeria.jsx";
import Certificados from "./pages/Certificados.jsx";
import NaoEncontrado from "./pages/NaoEncontrado.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projetos/:id" element={<ProjetoDetalhes />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
      <Footer />
    </>
  );
}
