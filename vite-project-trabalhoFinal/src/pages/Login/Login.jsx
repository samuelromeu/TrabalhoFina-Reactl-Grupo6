import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginFormulario from '../../components/loginFormulario/LoginFormulario';
import styled from 'styled-components';
import style from "./login.module.css"
import login_icon from "../../images/login_icon.png"

export function Login() {
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        navigate('/');
    };

    return (
        <div className={style.background}>
        <container className = {style.login}/>
        <img className={style.icon} src={login_icon}></img>
                       
            <LoginFormulario onLoginSuccess={handleLoginSuccess} />
            
        </div>
    );
}

export default Login;
