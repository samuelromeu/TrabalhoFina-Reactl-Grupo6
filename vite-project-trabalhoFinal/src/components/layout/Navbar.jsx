import { Link } from 'react-router-dom';
import Container from "../layout/Container";
import styles from "../layout/Navbar.module.css";
import logo from "../../images/Logo.png";

function Navbar () {
    return (
        <nav className={styles.navbar}> 
            <Container>
                <Link to="/">
                    <img className={styles.logo} src={logo} alt="Toca do Livro" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Página Inicial</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/carrinho">Carrinho</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;