import styles from "./button.module.css";

// botao - title, valor, onclick;

export function Botao({ valor, onclick}) {
  return (
    <>
      <button
        id="button"
        className={styles.botaoBase}
        onClick={onclick}
        >
        {valor}
      </button>
    </>
  );
}
