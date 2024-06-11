import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postCliente } from "../../services/usarioService/usuarioService";
import styles from "../Cadastro/Cadastro.module.css";
import Cadastro_icon from "../../images/cadastro_icon.png";

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
    <div className={styles.cadastro}>
      <img className="icon" src={Cadastro_icon}></img>
      <form className={styles.form}>
        <input className={styles.imput} name = "nome" placeholder="Digite seu nome aqui" value={formInfo.nome} onChange={adicionar}></input>
          <br />
        <input className={styles.imput2} name = "telefone" placeholder="Digite seu telefone aqui"value={formInfo.telefone} onChange={adicionar}></input>
          <br />
        <input className={styles.imput3} name = "email" placeholder="Digite seu email aqui"value={formInfo.email} onChange={adicionar}></input>
          <br />   
        <input className={styles.imput4} name = "cpf" placeholder="Digite seu cpf aqui" value={formInfo.cpf} onChange={adicionar}></input>
          <br />
        <input className={styles.imput5} name = "cep" placeholder="Digite seu cep aqui"value={formInfo.cep} onChange={adicionar}></input>
          <br />
        <input className={styles.imput6} name = "senha" type="password" placeholder="Digite sua senha aqui" value={formInfo.senha} onChange={adicionar}></input>
          <br />
        <button className={styles.button1} type="button" onClick={()=> criarCliente(formInfo)}>Enviar</button>
      </form>
    </div>
  )
}

export default Cadastro;