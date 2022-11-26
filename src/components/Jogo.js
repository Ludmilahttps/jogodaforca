export default function Jogo() {
    return (
        <div className="jogo">
            <div className="life">
                <img data-test="game-image"></img>
            </div>
            <div className="sidebar">
                <button data-test="choose-word" ></button>
                <div className="word">

                </div>
            </div>
        </div>
    )
}