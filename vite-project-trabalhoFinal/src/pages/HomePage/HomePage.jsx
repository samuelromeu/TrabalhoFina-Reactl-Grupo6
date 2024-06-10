import {useState, useEffect, useContext} from "react";
import {ProdutoContext} from "../../context/produtoContext"
import { Cardbox } from "../../components/card/Style";
import styles from "../HomePage/HomePage.module.css";

export function HomePage() {
    const ListaProdutos= useContext(ProdutoContext);
    const [produtos, setProdutos] = useState([]);

    useEffect(()=>{
        setProdutos(ListaProdutos)
        }, [ListaProdutos])

        console.log(produtos)

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
                        <button className= "b-carrinho" type="button" onClick={()=>(window.location.href= "/carrinho")}>Adc. ao Carrinho</button>
                    </Cardbox>
                ))}
            </div>
            </>
        );
}
