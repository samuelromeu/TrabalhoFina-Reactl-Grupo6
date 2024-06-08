import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postCliente } from "../../services/usarioService/usuarioService";


export function Cadastro() {
  const navigate = useNavigate();
  
  const [formInfo,setformInfo]= useState({
    nome:"",
    telefone:"",
    email:"",
    cpf:"",
    senha:"",
    cep:""
  })
  
  function criarCliente(cliente) {
    postCliente(cliente)
  }

  const adicionar = (event)=> {
    event.preventDefault();
    const { name,value } = event.target;
    setformInfo({...formInfo,[name]: value});
  }

  return(
    <main>
      <div>
        <h1>Cadastre-se</h1>
        <form>
          <label> Digite seu nome:</label>
       <input name = "nome" value={formInfo.nome} onChange={adicionar}></input>
       <br />
       <label> Digite seu telefone:</label>
       <input name = "telefone" value={formInfo.telefone} onChange={adicionar}></input>
        <br />
        <label> Digite seu email:</label>
       <input name = "email" value={formInfo.email} onChange={adicionar}></input>
        <br />
        <label> Digite seu cpf:</label>
       <input name = "cpf" value={formInfo.cpf} onChange={adicionar}></input>
        <br />
        <label> Digite seu cep:</label>
       <input name = "cep" value={formInfo.cep} onChange={adicionar}></input>
        <br />
        </form>
        <label> Digite sua senha:</label>
       <input name = "senha" value={formInfo.senha} onChange={adicionar}></input>
        <br />
        <button type="button" onClick={()=> criarCliente(formInfo)}>Enviar</button>
      </div>
    </main>
  


  )
}

export default Cadastro;