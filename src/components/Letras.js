import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";

export default function Letras(props) {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"];

  const Letters = alfabeto.map((letter) => { return <Letter props={props} a={letter} /> })

  return (
    <div className="letters">
      {Letters}
    </div >
  )
}

function Letter(prop) {
  let aux = 0;
  return (
    <button data-test="letter" className="letter" disabled={prop.props.habilitado} id={prop.a} onClick={() => {
      //console.log((document.getElementById(`${prop.a}`)).getAttribute("disabled", false))
      if ((document.getElementById(`${prop.a}`)).getAttribute("disabled", false) === true ||
      (document.getElementById(`${prop.a}`)).getAttribute("disabled", false) === null) {
        if (!prop.props.letraclicada.includes(prop.a)) {
          prop.props.setLetraClicada([...prop.props.letraclicada, prop.a])
        }
        if (prop.props.palavra.includes(prop.a)) {
          const novoletrascertas = [...prop.props.letrascertas, prop.a]
          prop.props.setLetrasCertas(novoletrascertas)
          for (let i = 0; i < prop.props.palavra.length; i++) {
            if (novoletrascertas.includes(prop.props.palavra[i])) {
              aux = aux + 1
            }
          }
        }
        if (aux === prop.props.palavra.length) {
          prop.props.setStatus('green')
          prop.props.setHabilitado(true)
          prop.props.setRun(false)
        }
        if (!prop.props.palavra.includes(prop.a)) {
          const novoerros = prop.props.erros + 1
          prop.props.setErros(novoerros)
          if (novoerros === 6) {
            prop.props.setStatus('red')
            prop.props.setHabilitado(true)
            prop.props.setRun(false)
          }
        }
        let elemento = document.getElementById(`${prop.a}`)
        elemento.setAttribute("disabled", "true")
        //console.log(elemento)
      }
    }}>
      <p>{prop.a}</p>
    </button>
  );
}