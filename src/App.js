import Chute from "./components/Chute"
import Jogo  from "./components/Jogo"
import Letras from "./components/Letras"
import palavras from "./components/palavras"

import React from 'react'

export default function App() {
    const [palavra, setPalavra] = React.useState([])
    const [erros, setErros] = React.useState(0)
    const [letraclicada, setLetraClicada] = React.useState([])
    const [habilitado, setHabilitado] = React.useState(false)
    const [letrascertas, setLetrasCertas] = React.useState([])
    const [chute, setChute] = React.useState(false)
    const [status, setStatus] = React.useState('black')
    const [run, setRun] = React.useState(false)
    const [off, setOff] = React.useState('none')

    return (
        <div className="container">
            <Jogo 
                palavra={palavra} 
                setPalavra={setPalavra}
                erros={erros} setErros={setErros} 
                letraclicada={letraclicada} 
                setLetraClicada={setLetraClicada} 
                habilitado={habilitado} 
                setHabilitado={setHabilitado} 
                letrascertas={letrascertas} 
                setLetrasCertas={setLetrasCertas} 
                chute={chute}
                setChute={setChute}
                status={status}
                setStatus={setStatus}
                run={run}
                setRun={setRun}
                off={off}
                setOff={setOff}
                />
            <Letras 
                palavra={palavra} 
                erros={erros} setErros={setErros} 
                letraclicada={letraclicada} 
                setLetraClicada={setLetraClicada} 
                habilitado={habilitado} 
                setHabilitado={setHabilitado} 
                letrascertas={letrascertas} 
                setLetrasCertas={setLetrasCertas} 
                chute={chute}
                setChute={setChute}
                status={status}
                setStatus={setStatus}
                run={run}
                setRun={setRun}
                off={off}
                setOff={setOff}
            />
            <Chute />
        </div>
    )
}