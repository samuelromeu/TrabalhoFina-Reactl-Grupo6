import {useState, useEffect, useContext} from "react";
import {ProdutoContext} from "../../context/produtoContext"

export function HomePage() {
    const ListaProdutos= useContext(ProdutoContext)
    const [produtos, setProdutos] = useState([])

    useEffect(()=>{
        setProdutos(ListaProdutos)
        }, [ListaProdutos])

        console.log(produtos)
        return (
            <div>
                <div>
                    {produtos.map((produto, index) => (
                        <div key={index}>
                            <p>Produto: {produto.nome}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
}
