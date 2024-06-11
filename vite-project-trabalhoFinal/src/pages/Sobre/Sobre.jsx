import { useNavigate } from "react-router-dom";
import { Botao } from "../../components/button/Button"
import Container from "../../components/layout/Container";
import lucastravassos from "../../images/Foto - Lucas Araujo.png"; 
import lucasvoigt from "../../images/Foto - Lucas Voigt.png"; 
import samuel from "../../images/Foto - Samuel.png";
import jordana from "../../images/Foto - Jordana.png";
import bruna from "../../images/Foto - Bruna.png";
import kamille from "../../images/Foto - Kamille.png";
import styles from "../../pages/Sobre/Sobre.module.css";

export function Sobre() {
  const navigate = useNavigate();
  
    return (
      <>
      <div className={styles.container_titulo}>
      <h1 className={styles.h1}>Sobre:</h1>
      </div>
      <div className={styles.container}>
        <h2 className={styles.subtitulo}>Equipe</h2>
        <div className={styles.container_cima}>
          <figure>
            <img className={styles.lucastravassos} src={lucastravassos} alt="Lucas Travassos"/> 
            <figcaption>Lucas Travassos</figcaption>
          </figure>
          <figure>
            <img className={styles.lucasvoigt} src={lucasvoigt} alt="Lucas Voigt"/> 
            <figcaption>Lucas Voigt</figcaption>
          </figure>
          <figure>
            <img className={styles.samuel} src={samuel} alt="Samuel Romeu"/>
            <figcaption>Samuel Romeu</figcaption>
          </figure>
          <figure>
            <img className={styles.jordana} src={jordana} alt="Jordana Araújo"/> 
            <figcaption>Jordana Araújo</figcaption>
          </figure>
          <figure>
            <img className={styles.bruna} src={bruna} alt="Bruna Tavares"/> 
            <figcaption>Bruna Tavares</figcaption>
          </figure>
          <figure>
            <img className={styles.kamille} src={kamille} alt="Kamille Cruz"/>
            <figcaption>Kamille Cruz</figcaption>
          </figure>
        </div>
        <div className={styles.container_baixo}>
          <p>A livraria Toca do Livro foi fundada no ano de 2024, na cidade de Petrópolis.
          A Livraria Toca do Livro, localizada em Petrópolis, é um refúgio literário para os amantes dos livros. Fundada com a missão de promover a leitura e a cultura na cidade, a Toca do Livro oferece uma seleção diversificada de títulos, abrangendo desde clássicos da literatura até lançamentos contemporâneos. Com um ambiente acolhedor e uma equipe apaixonada por livros, a livraria se tornou um ponto de encontro para leitores de todas as idades, além de sediar eventos culturais, lançamentos de livros e encontros literários. A Toca do Livro é mais que uma livraria; é um espaço de inspiração e troca de conhecimentos.
          </p>
        </div>
      </div>
      </>
    );     
}

export default Sobre;