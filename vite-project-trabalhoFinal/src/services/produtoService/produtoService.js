import { api } from "../api"

export const getProdutos= ()=> {
    const url = '/batata'
    return api.get(url, {
        headers:{"Access-Control-Allow-Origin*":""}
    })
}

