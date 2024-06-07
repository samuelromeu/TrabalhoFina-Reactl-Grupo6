import { Routes, Route } from "react-router-dom";
import { HomePage} from "../pages/HomePage/HomePage";
import { Sobre } from "../pages/Sobre/Sobre";

export function Rotas() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/sobre" element={<Sobre />}/>
      </Routes>
    );
  }
