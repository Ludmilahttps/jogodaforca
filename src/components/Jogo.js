import palavras from "./palavras"
import React from 'react'

export default function Jogo(props) {

    function initGame() {
        props.setRun(true) //permite que o jogo seja reiniciado a qualquer momento
        props.setHabilitado(false)
        props.setLetraClicada('.')
        props.setOff('')
        props.setPalavra(shuffle())
        props.setStatus('black')
        props.setErros(0)
        props.setWin(false)
        props.setChute('')
        props.setGuess()
    }

    return (
        <div className="jogo">
            <div className="life">
                <img data-test="game-image" src={`assets/forca${props.erros}.png`}></img>
            </div>
            <div className="sidebar">
                <button data-test="choose-word" id="choose-word" disabled={props.run} onClick={initGame}>Choose Word</button>
                <div data-test="word" data-answer={props.palavra.join('')} className={`word traços ${props.off}`}>
                    {props.palavra.map(p =>
                        <div className="letraforca" >
                            <h1 style={props.letraclicada.includes(p) || props.erros === 6 || props.win ? { display: 'block' } : { display: 'none' }} className={props.status}>{p}</h1>
                            <h2 style={props.letraclicada.includes(p) || props.erros === 6 || props.win ? { display: 'none' } : { display: 'block' }}>{'_'}</h2>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

function shuffle()
{
    const randomElement = palavras[Math.floor(Math.random() * palavras.length)]
    return (randomElement.split(''))
}