import {useState, useEffect, useContext} from "react";
import {ProdutoContext} from "../../context/produtoContext"
import { Cardbox } from "../../components/card/Style";
import styles from "../HomePage/HomePage.module.css";
import { cartContext } from "../../context/carrinhoContext";

export function HomePage() {
    const ListaProdutos= useContext(ProdutoContext);
    const {adicionarItens} = useContext(cartContext);
    const [produtos, setProdutos] = useState([]);

useEffect(()=>{
    setProdutos(ListaProdutos)
        }, [ListaProdutos])

        console.log(produtos)

        const adicionarCarrinho = (produto) =>  {
            if(localStorage.getItem("token") === null){
                alert("Logue para poder adicionar itens ao carrinho")
                setInterval(() => {window.location.href="/cadastro"},1000)
            }else{
                adicionarItens(produto)
            }
        }

        return (
            <>
            <h1 className={styles.titulo}>Produtos:</h1>
            <div className={styles.CardProdutos}>
                {produtos.map((produto) => (
                    <Cardbox key = {produto.id}>
                        <p className="p-foto"><img height="150px" src={produto.url}></img></p>
                        <p className="p-livro">Livro: {produto.nome}</p>
                        <p className="p-preco">Preço: R${produto.preco},00</p>
                        <p className="p-descricao">Descrição: {produto.descricaoProduto}</p>
                        <button className= "b-carrinho" type="button" onClick={()=> {
                        adicionarCarrinho(produto);
                        alert("Você adicionou o livro: " + produto.nome + " ao carrinho!");}
                        }>Adc. ao Carrinho</button>
                    </Cardbox>
                ))}
            </div>
            </>
        );
}
