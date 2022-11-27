export default function Chute() {
    return (
        <div className="guess">
            <p>I already know the word!</p>
            <input data-test="guess-input"></input>
            <button data-test="guess-button">Try</button>
        </div>
    )
}