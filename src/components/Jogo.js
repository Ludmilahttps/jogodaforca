export default function Jogo() {
    return (
        <div className="jogo">
            <div className="life">
                <img data-test="game-image" src="./assets/forca0.png"></img>
            </div>
            <div className="sidebar">
                <button data-test="choose-word" >Choose Word</button>
                <div className="word">

                </div>
            </div>
        </div>
    )
}