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
                <div data-test='word' data-answer={props.palavra.join('')} className="word traços">
                    {props.palavra.map(p =>
                        <div className="letraforca" >
                            <h1 style={props.letraclicada.includes(p) || props.erros === 6 || props.chute ? { display: 'block' } : { display: 'none' }} className={props.status}>{p}</h1>
                            <h2 style={props.letraclicada.includes(p) || props.erros === 6 || props.chute ? { display: 'none' } : { display: 'block' }}>{' __ '}</h2>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}