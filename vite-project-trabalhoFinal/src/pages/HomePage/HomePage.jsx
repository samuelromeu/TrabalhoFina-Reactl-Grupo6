import { useNavigate } from "react-router-dom";
import { Botao } from "../../components/button/Button"

export function HomePage() {
    const navigate = useNavigate();
  
  
    return (
      <>
      <h1>HomePage</h1>
        <br/>      <br/>
        <Botao
          onclick={() => navigate("/sobre")}
          valor={"Sobre"}
        />
        <br/>      <br/>
        </>
    );    
}

export default HomePage;