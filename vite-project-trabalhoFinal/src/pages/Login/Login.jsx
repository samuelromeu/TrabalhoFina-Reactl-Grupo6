import { useNavigate } from "react-router-dom";


export function Login() {
    const navigate = useNavigate();
  
  
    return (
      <>
      <h1>Login</h1>
        <br/>      <br/>
        {/* <Botao
          onclick={() => navigate("/lista")}
          valor={"Lista"}
        /> */}
        <br/>      <br/>
        </>
    );    
}

export default Login;