import { useNavigate } from "react-router-dom";
import { Botao } from "../../components/button/Button"

export function Sobre() {
    const navigate = useNavigate();
  
  
    return (
      <>
      <h1>Sobre</h1>
        <br/>      <br/>
        <Botao
          onclick={() => navigate("/")}
          valor={"Sair"}
        />
        <br/>      <br/>
        </>
    );    
}

export default Sobre;