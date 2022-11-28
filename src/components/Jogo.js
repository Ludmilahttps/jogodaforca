import Letras from "./Letras"
import React from 'react'

export default function Jogo(props) {

    function initGame() {
        props.setHabilitado(true)
        props.setLetraClicada('.')
        props.setTracos('flex')
        window.location.reload(true)
    }

    return (
        <div className="jogo">
            <div className="life">
                <img data-test="game-image" src={`assets/forca${props.erros}.png`}></img>
            </div>
            <div className="sidebar">
                <button data-test="choose-word" onClick={initGame}>Choose Word</button>
                <div data-test='word' data-answer={props.palavra.join('')} className="traços">
                    {props.palavra}
                </div>
            </div>
        </div>
    )
}