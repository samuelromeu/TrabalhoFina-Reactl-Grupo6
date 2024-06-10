import styled from 'styled-components';
import './Card.module.css'

export const Cardbox = styled.div.attrs(() => ({
    className: 'font-pattaya',  
  }))`
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 1.2rem;
    width: 15rem;
    height: 30rem;
    background-color: #F5F0E0;
    border-radius: 0px;
    margin: 10px;
    padding-top: 1.3rem;
    margin-top: 0.7rem;
    color: black;
    display: inline-flex;
    flex-direction: column;

    p {
        margin-bottom: 0px; 
    }
    .p-livro {
        font-size: 19px;
        margin-bottom: -15px;
        font-family: 'Pattaya', sans-serif;
    }
    .p-descricao {
        font-size: 15.5px;
        margin-bottom: 10px;
        margin-top: 10px;
        font-weight: bold;
        min-height:9.5rem;
        font-family: 'Pattaya', sans-serif;
    }
    .p-preco {
        font-size: 17px;
        margin-bottom: 0px;
        font-weight: bold;
        font-family: 'Pattaya', sans-serif;
    }
    .b-carrinho{
        color: black;
        background-color: #13990C;
        border-radius: 0px;
        margin-bottom: 10px;
        font-family: 'Pattaya', sans-serif;
    }
    .p-preco, .p-livro {
        display: flex;
    }
  `;