import Chute from "./Chute"
import Jogo  from "./Jogo"
import Letras from "./Letras"

//Componente = funcao que retorna um JSX(Layout)
export default function App() {
    return (
        <div className="container">
            <Jogo/>
            <Letras />
            <Chute />
        </div>
    )
}