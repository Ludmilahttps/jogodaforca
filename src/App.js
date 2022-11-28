import Chute from "./components/Chute"
import Jogo  from "./components/Jogo"
import Letras from "./components/Letras"
import palavras from "./components/palavras"

import React from 'react'

let palavra;
const randomElement = palavras[Math.floor(Math.random() * palavras.length)];
palavra = randomElement.split('')

export default function App() {

    const [erros, setErros] = React.useState(0)
    const [Tracos, setTracos] = React.useState('none')
    const [letraclicada, setLetraClicada] = React.useState([])
    const [habilitado, setHabilitado] = React.useState(false)
    const [letrascertas, setLetrasCertas] = React.useState([])
    const [habilitariniciarjogo, setHabilitarIniciarJogo] = React.useState(false)

    return (
        <div className="container">
            <Jogo 
                palavra={palavra} 
                erros={erros} setErros={setErros} 
                Tracos={Tracos} 
                setTracos={setTracos} 
                letraclicada={letraclicada} 
                setLetraClicada={setLetraClicada} 
                habilitado={habilitado} 
                setHabilitado={setHabilitado} 
                letrascertas={letrascertas} 
                setLetrasCertas={setLetrasCertas} 
                habilitariniciarjogo={habilitariniciarjogo} 
                setHabilitarIniciarJogo={setHabilitarIniciarJogo}/>
            <Letras />
            <Chute />
        </div>
    )
}