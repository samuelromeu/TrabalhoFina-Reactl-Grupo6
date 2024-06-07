const API_URL = "http://localhost:8080"

const getProdutos = async() => {
    try{
        const resposta = await fetch(`$`,{API_URL}/produtos);
        if(!resposta.ok) {
            throw new Error("Sem resposta")
        }
        return await resposta.json();
    } catch (error){
        console.error("Erro get", error);
        throw error;
    }
}

export {getProdutos}