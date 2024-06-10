import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postCliente } from "../../services/usarioService/usuarioService";
import styles from "../Cadastro/Cadastro.module.css";
import cadastro from "../../images/cadastro.png"

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
        
          <div className={styles.marrom}>

          <h1>Cadastre-se</h1>
        {/* <img height="200px" src={cadastro.png}></img> */}
          

        <form>
         
       <input name = "nome" placeholder="Digite seu nome aqui" value={formInfo.nome} onChange={adicionar}></input>
       <br />
      
       <input name = "telefone" placeholder="Digite seu telefone aqui"value={formInfo.telefone} onChange={adicionar}></input>
        <br />
     
       <input name = "email" placeholder="Digite seu email aqui"value={formInfo.email} onChange={adicionar}></input>
        <br />
        
       <input name = "cpf" placeholder="Digite seu cpf aqui" value={formInfo.cpf} onChange={adicionar}></input>
        <br />
        
       <input name = "cep" placeholder="Digite seu cep aqui"value={formInfo.cep} onChange={adicionar}></input>
        <br />
        </form>
     
       <input name = "senha" type="password" placeholder="Digite sua senha aqui" value={formInfo.senha} onChange={adicionar}></input>
        <br />
        <button className={styles.button1} type="button" onClick={()=> criarCliente(formInfo)}>Enviar</button>
        </div>
      </div>
    </main>
  


  )
}

export default Cadastro;