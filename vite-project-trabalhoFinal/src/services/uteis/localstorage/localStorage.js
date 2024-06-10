export const salvarToken =(token)=>{
    localStorage.setItem('token', token);
}

export const obterToken =()=>{
    const token = localStorage.getItem('token');

    return token ? token : 'não foi possível obter o token';
}

export const limparLocalStorage = ()=>{
    localStorage.clear();
}

export const salvarPerfilUsuario = (dadosUsuario)=>{
    localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));
   };

export const obterPerfilUsuario = () =>{
    const perfilUsuario = localStorage.getItem("dadosUsuario")
    return  perfilUsuario ? JSON.parse(perfilUsuario) : null;

}

export const salvarProdutosCarrinho = (Produtos)=>{
    localStorage.setItem('Produtos', JSON.stringify(Produtos));
   };

   export const obterProdutosCarrinho = () =>{
    const ProdutosCarrinho = localStorage.getItem("Produtos");
    return  ProdutosCarrinho ? JSON.parse(ProdutosCarrinho) : [];

};

export const limparProdutos = () =>{
    localStorage.removeItem("Produtos");
};

