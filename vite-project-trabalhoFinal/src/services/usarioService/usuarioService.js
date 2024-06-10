import { api } from "../api"
import { salvarPerfilUsuario, salvarToken, obterPerfilUsuario } from "../uteis/localstorage/localStorage"

export const getCliente= ()=> {
    const url = '/clientes'
    return api.get(url, {
        headers:{"Access-Control-Allow-Origin*":""}
    })
}

export const postCliente= async (cliente)=> {
    const url = '/clientes'
    try {
        const resposta = await api.post(url, cliente, {
            headers: { "Access-Control-Allow-Origin*": "" }
        })
        salvarPerfilUsuario(resposta.data)
        salvarToken("Logado")
        return alert(`Bem vindo ${cliente.nome}`)
    } catch (erro) {
        console.error("erro ao criar cliente", erro)
    }
 }

 export const getClienteId= async ()=> {
    const cliente = obterPerfilUsuario()
    if(!cliente || cliente === null){
        console.error("Erro ao pegar cliente")
    }
    const url = `/clientes/${cliente.id}`
    try {
        const res = await api.get(url)
        salvarPerfilUsuario(res.data)
        return res.data
    } catch (err) {
        console.error("Erro ao obeter informações")
    }
}
