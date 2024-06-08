import { api } from "../api"

export const getCliente= ()=> {
    const url = '/clientes'
    return api.get(url, {
        headers:{"Access-Control-Allow-Origin*":""}
    })
}

export const postCliente= (cliente)=> {
    const url = '/clientes'
    return api.post(url,cliente, {
        headers:{"Access-Control-Allow-Origin*":""}
    }).then((resposta)=>{return(resposta.data)}).catch((erro)=>{
     console.error("erro ao criar cliente",erro)
     })

}


