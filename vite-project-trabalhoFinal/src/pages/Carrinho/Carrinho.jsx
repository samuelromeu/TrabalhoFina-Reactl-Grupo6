import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext} from "react";
import { obterPerfilUsuario, obterProdutosCarrinho, limparProdutos } from "../../services/uteis/localstorage/localStorage";
import { cartContext } from "../../context/carrinhoContext";
import { postPedido } from "../../services/pedidoService/pedidoService";
import { getClienteId } from "../../services/usarioService/usuarioService";

export function Carrinho() {
  const {cartItens} = useContext(cartContext);
  const [itens, setItens] = useState([]);
  const [cliente, setCliente] = useState(undefined); 
  const navigate = useNavigate();
  
    useEffect(()=>{
      const obterCliente = obterPerfilUsuario();
      setCliente(obterCliente)
      const itensCarts = obterProdutosCarrinho();
      setItens(itensCarts)
      const clienteAtualizar = async () =>{
        const clienteAtualizado = await getClienteId()
        setCliente(clienteAtualizado)
    }
  
    if (obterCliente) {
        clienteAtualizar()
        }
  
        const ItensCart = obterProdutosCarrinho()
        setItens(ItensCart)
    },[]);
    
    if (cliente === undefined) {
      return <div>...Carregando...</div>
      }    

    const finalizar = () => {
      const pedido = {
        status: "FINALIZADO",
        cliente: { id: cliente.id },
        produtoIds: cartItens.map(item => item.id), 
        produtoNome: cartItens.map(item => item.nome).join(", "), 
        preco: cartItens.map(item => parseFloat(item.preco)), 
        quantidade: cartItens.map(item => item.quantidade)
      };
      console.log(pedido);
      postPedido(pedido);
      limparProdutos()
    };

    return (
      <>
      <h1>Carrinho</h1>
       <br/> 
       <br/>
       <div>{itens.map((item)=> (<div>
           <p>{item.nome}</p>
           <img src={item.url}/>
          <center> <button type="button" onClick={finalizar}></button> </center>
     </div>
      ))}</div>
        </>
    );    
}

export default Carrinho;