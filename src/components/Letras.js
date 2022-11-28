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
  return (
    <div data-test="letter" className="letter" onClick={() => {prop.props.setLetraClicada([...prop.props.letraclicada,prop.a])}}>
      <p>{prop.a}</p>
    </div>
  );
}

function Try()
{
  let aux;
}