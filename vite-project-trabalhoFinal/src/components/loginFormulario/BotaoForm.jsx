import style from "./loginFormulario.module.css"

export function BotaoF({ valor, onclick}) {
    return (
      <>
        <button
          id="button"
          type="submit"
          className={style.botaoForm}
          onClick={onclick}
          >
          {valor}
        </button>
      </>
    );
  }

  export function BotaoCad({ valor, onclick}) {
    return (
      <>
        <button
          id="button"
          type="button"
          className={style.botaoCad}
          onClick={onclick}
          >
          {valor}
        </button>
      </>
    );
  }