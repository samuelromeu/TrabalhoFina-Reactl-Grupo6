import { useNavigate } from "react-router-dom";


export function Cadastro() {
    const navigate = useNavigate();
  
  
    return (
      <>
      <h1>Cadastro</h1>
        <br/>      <br/>
        {/* <Botao
          onclick={() => navigate("/lista")}
          valor={"Lista"}
        /> */}
        <br/>      <br/>
        </>
    );    
}

export default Cadastro;