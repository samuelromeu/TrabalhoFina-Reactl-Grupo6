import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginFormulario from '../../components/loginFormulario/LoginFormulario';

export function Login() {
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        navigate('/');
    };

    return (
        <>
            <h1>Login</h1>
            <br/><br/>
            <LoginFormulario onLoginSuccess={handleLoginSuccess} />
            <br/><br/>
        </>
    );
}

export default Login;
