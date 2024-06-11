import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext} from "react";
import { obterPerfilUsuario, obterProdutosCarrinho, limparProdutos } from "../../services/uteis/localstorage/localStorage";
import { cartContext} from "../../context/carrinhoContext";
import { postPedido } from "../../services/pedidoService/pedidoService";
import { getClienteId } from "../../services/usarioService/usuarioService";
import styles from "../Carrinho/Carrinho.module.css";
import { Cardbox } from "../../components/card/Style";

export function Carrinho() {
  const {cartItens} = useContext(cartContext);
  const [itens, setItens] = useState([]);
  const {removerItens, excluirItens, adicionarItens, calcularValorTotal, valorTotal} = useContext(cartContext);
  const [cliente, setCliente] = useState(undefined); 


  const navigate = useNavigate();
  
  const adicionarCarrinho = (item)=> {
    adicionarItens(item)
  } 
  
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

      calcularValorTotal();
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

        postPedido(pedido);
        alert("Seu Pedido foi realiizado com sucesso");
        limparProdutos()
        };
        

        return (
          <>
     
       <br/> 
       <br/>
       <div className={styles.container}>{cartItens.map((item)=> (<div className={styles.card} key = {item.id}>
        <p className="p-foto"><img height="250px" src={item.url}></img></p>
        <div className={styles.card2}>
        <b>Livro:</b> {item.nome}<br></br>   
        <b>Preço Unitário:</b> R${item.preco},00<br></br>
        <b>Descrição:</b> {item.descricaoProduto}<br></br>

        <div className="quantity-control">
        <button className={styles.botaoQuantidade} onClick={()=>removerItens(item.id)} >-</button>
        <span className="quantity">{item.quantidade}</span>
        <button className={styles.botaoQuantidade} onClick={()=>adicionarCarrinho(item)}>+</button>
        </div>

        <button type=" button" className={styles.botaoRemover} onClick={()=>excluirItens(item.id)}>Remover do carrinho</button>
        </div>
       </div>
      ))}
      
      <strong><p>Total: R$ {valorTotal},00</p></strong>
      </div>
     
       <button type="button" className={styles.botao} onClick={
                        finalizar
                        }> Finalizar compra</button>  
        </>
    );    
} 
export default Carrinho;