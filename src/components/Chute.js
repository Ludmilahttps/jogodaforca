export default function Chute(props) {
    return (
        <div className="guess">
            <p>I already know the word!</p>
            <input data-test="guess-input" disabled={props.guess} value={props.chute}
                onChange={(event) => { props.setChute(event.target.value) }}></input>
            <button data-test="guess-button" disabled={props.guess} onClick={() => {guess(props)}}>Try</button>
        </div>
    )
}

function guess(props)
{
    console.log(props)
    props.setOff(true)
    if (props.chute === props.palavra.join('')) {
        //alert("You Win")
        props.setWin(true)
        props.setStatus('green')
    }
    else {
        //alert("You Lose")
        props.setErros(6)
        props.setStatus('red')
    }
    props.setHabilitado(true)
    props.setRun(false)
    props.setGuess(false)
}