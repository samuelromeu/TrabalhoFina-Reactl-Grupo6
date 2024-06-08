import { createContext, useState, useEffect } from "react";
import { getProdutos } from "../services/produtoService/produtoService";

const ProdutoContext = createContext();

const ProdutoProvider = (props) => {
    const [produtos, setProduto] = useState([])

    function obterProduto() {
        getProdutos().then((res) =>{
            setProduto(res.data)
            console.log(res.data);
            }).catch((err)=>{
                console.log("Erro ao buscar produtos", err);
                })
                }
    useEffect(()=>(obterProduto()),[])

    return(
        <ProdutoContext.Provider value={produtos}>
        {props.children}
        </ProdutoContext.Provider>
    )
}

export {ProdutoContext, ProdutoProvider};