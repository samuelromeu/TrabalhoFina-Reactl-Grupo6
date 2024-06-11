import { useNavigate } from "react-router-dom";
import { Botao } from "../../components/button/Button"
import Container from "../../components/layout/Container";

export function Sobre() {
    const navigate = useNavigate();
  
  
    return (
      <div className="container">
      <div className="containerCima">
      <h1>Sobre</h1>
      </div>
      <div className="containerMeio">

      </div>
      <div className="containerBaixo">
      <p>A livraria Toca do Livro foi fundada no ano de 2024, na cidade de Petrópolis.
      A Livraria Toca do Livro, localizada em Petrópolis, é um refúgio literário para os amantes dos livros. Fundada com a missão de promover a leitura e a cultura na cidade, a Toca do Livro oferece uma seleção diversificada de títulos, abrangendo desde clássicos da literatura até lançamentos contemporâneos. Com um ambiente acolhedor e uma equipe apaixonada por livros, a livraria se tornou um ponto de encontro para leitores de todas as idades, além de sediar eventos culturais, lançamentos de livros e encontros literários. A Toca do Livro é mais que uma livraria; é um espaço de inspiração e troca de conhecimentos.</p>
      </div>
      </div>
        

    );  
      
}


export default Sobre;