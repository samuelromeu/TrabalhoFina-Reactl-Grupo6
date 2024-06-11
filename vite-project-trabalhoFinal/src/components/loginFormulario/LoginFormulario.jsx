import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import style from "./loginFormulario.module.css";
import { BotaoCad, BotaoF } from "./BotaoForm";
import Cadastro from "../../pages/Cadastro/Cadastro";

const LoginFormulario = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginSuccess = login(email, senha);
    if (loginSuccess) {
      alert("Login realizado com sucesso!");
      onLoginSuccess();
    } else {
      alert("Falha ao realizar login.");
    }
  };

  return (
<div className = {style.login}>
    <form className = {style.form}onSubmit={handleSubmit}>
      <input className={style.input}
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input className={style.input2}
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required

      />
      <BotaoCad onclick ={() => navigate('/cadastro')} valor ={"Não tem conta? Cadastre-se"}/>
      <BotaoF onclick={() => {handleSubmit()}} valor={"Login"}/>
      {/* <button type="submit"> Entrar </button>

      <Link to="/login">Login</Link> */}
    </form>
    </div>
  );
};

export default LoginFormulario;
