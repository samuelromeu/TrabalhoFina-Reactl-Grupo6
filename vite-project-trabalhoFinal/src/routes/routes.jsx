import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HomePage} from "../pages/HomePage/HomePage";
import { Sobre } from "../pages/Sobre/Sobre";
import Cadastro from "../pages/Cadastro/Cadastro";
import Carrinho from "../pages/Carrinho/Carrinho";
import Login from "../pages/Login/Login";
import Container from "../components/layout/Container";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export function Rotas() {
    return (
      <div className="Padrao">
        <Navbar/>
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/carrinho" element={<Carrinho />}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </Container>
        <Footer />
      </div>
    );
  }
