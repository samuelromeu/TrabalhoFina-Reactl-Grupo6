import { useNavigate } from "react-router-dom";


export function Carrinho() {
    const navigate = useNavigate();
  
  
    return (
      <>
      <h1>Carrinho</h1>
        <br/>      <br/>
        {/* <Botao
          onclick={() => navigate("/lista")}
          valor={"Lista"}
        /> */}
        <br/>      <br/>
        </>
    );    
}

export default Carrinho;