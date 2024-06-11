import { useState, useEffect } from "react";
import { createContext } from "react";
import { limparProdutos } from "../services/uteis/localstorage/localStorage";
import { obterProdutosCarrinho, salvarProdutosCarrinho } from "../services/uteis/localstorage/localStorage";


const cartContext = createContext();

const CartProvider = (props) => {
  const [cartItens, setCartItens] = useState(obterProdutosCarrinho());  //carrinho
  const [valorTotal, setValorTotal] = useState(0);  //valor total
  


  function adicionarItens(novoProduto) {
      const produtoExistente = cartItens.find(produto => produto.id === novoProduto.id);
      
      var novosItens; //utilizarmos dentro e fora dos if
      
    if (produtoExistente) {
      novosItens = cartItens.map(item => {
        if (item.id === novoProduto.id) {
          return { ...item, quantidade: item.quantidade + 1 }; // "..." pega tudo o que tem na variavel, acha o produto que tem salvo no carrinho com o mesmo id
        }
        return item;
      });
    } else {
      novosItens = [...cartItens, { ...novoProduto, quantidade: 1 }];
    }
    calcularValorTotal();
    setCartItens(novosItens);
    salvarProdutosCarrinho(novosItens);
  }

  function removerItens(id) {
    const novosItens = cartItens.map(item => {
      if (item.id === id) {
        return { ...item, quantidade: item.quantidade - 1 };
      }
      return item;
    }).filter(item => item.quantidade > 0);

    setCartItens(novosItens);
    salvarProdutosCarrinho(novosItens);
  }

  function excluirItens(id) {
    const novosItens = cartItens.filter(item => item.id !== id) 
    
    setCartItens(novosItens);
    salvarProdutosCarrinho(novosItens);
  }
    
  
  function limparCarrinho() { // a desenvolver
    setCartItens([]);
    limparProdutos();
}

  function calcularValorTotal() {
    let total = 0;
    cartItens.forEach((item) => {
      total += item.quantidade * item.preco;
    });
    setValorTotal(total);
  }

  return (
    <cartContext.Provider
      value={{
        cartItens,
        adicionarItens,
        removerItens,
        limparCarrinho,
        calcularValorTotal,
        excluirItens,
        valorTotal
      }}
    >
        {props.children}
    </cartContext.Provider>
  );
};

export {cartContext, CartProvider}
