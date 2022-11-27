export default function Letras() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", 
    "s", "t", "u", "v", "w", "x", "y", "z"];

    const Letters = alfabeto.map((letter) => { return <Letter  a={letter}/> })

    return (
        <div className="letters">
            {Letters}
        </div>
    )
}


function Letter(props) {

    return (
      <div  data-test="letter" className="letter" >
        <p>{props.a}</p>
      </div>
    );
}
