# Descrição

Esse projeto eh a implementacao do famoso jogo da forca! Nele, o usuario tem um total de 6 vidas, caso ele acerte a palavra antes de perder todas as vidas ele ganha, caso contrario ele perde!

jogodaforca-ak5ncl75t-ludmilahttps.vercel.app

# Requisitos

- Layout
    
    [x]  Manipila o HTML usando somente React (sem usar o document nem bibliotecas como jQuery)
    
    As imagens da forca estão disponíveis nesse notion, a parte de “Arquivos do Projeto”. São 7 imagens que devem ser alternadas de acordo com a quantidade de erros do usuário.
    
- Componentização
    - [x]  O seu jogo deverá ter 4 componentes:
        - [x]  App (chamará os demais componentes)
        - [x]  Jogo (imagem da forca, botão de iniciar, palavra do jogo)
        - [x]  Letras (conjunto de botões com as letras)
        - [x]  Chute (input e botão de chute)
        
- Pré-jogo
    - [x]  Crie um arquivo chamado `palavras.js` e coloque ele dentro da pasta `src` (o nome e o local precisam ser esses!)
    - [x]  Dentro do arquivo, insira o array de palavras disponibilizado abaixo:
        - Arquivo de palavras
            
            ```jsx
            const palavras = [
                "abacate", "abacaxi", "abelha", "abanador", "antologia", "amor", "aba", "abrigo", "abrir",
                "banana", "boi", "batata", "bacalhau", "bexiga", "bowl", "batedeira", "bisturi", "barreira", "banco",
                "caixa", "chantilly", "cachorro", "cuidado", "caneta", "carinho", "cabra", "cesto",
                "dados", "dizer", "danone", "dente", "diamante", "diafragma", "detonar", "dia",
                "elefante", "esmeralda", "esfinge", "esfera", "encontro", "ema", "escola", "economia",
                "formiga", "fama", "festa", "fiador", "ferver", "flauta", "figo", "fiapo", "fotografia",
                "goiaba", "gelo", "grito", "guria", "goleiro", "golfinho", "golfe", "girar",
                "harmonia", "haste", "hectare", "hepatite", "hiena", "hidrante",
                "igreja", "importante", "idoso", "irado", "identidade", "idioma", "idade", "idiota",
                "jantar", "jumento", "jararaca", "janela", "jerimum", "jaula", "jabuti", "jaleco",
                "laranja", "lua", "luz", "lindo", "lacraia", "lactose", "lacrar",
                "manga", "morango", "mico", "matar", "mingau", "moqueca", "mocassin",
                "nectarina", "nada", "navio", "namorado", "ninja", "natal", "narciso", "narina", "nabo",
                "ovo", "ostra", "obstetra", "orangotango", "olhar", "ortodoxo", "ouro", "ornamento",
                "pato", "polvo", "povoar", "pano", "princesa", "pizza", "patroa",
                "queijo", "quitanda", "quinta", "quantia", "quarentena", "quadrilha", "quaresma", "quartzo", "quebrar",
                "risada", "rio", "remar", "rato", "racional", "rainha", "radioatividade", "raiz", "raiva", "rachadura",
                "salada", "salamandra", "sacola", "siri", "sabre", "sucarose", "sabedoria", "sacerdote",
                "tatu", "tabacaria", "taberneiro", "torrada", "tamanho", "tatuagem", "trem",
                "uva", "universo", "unanimidade", "ubuntu", "universidade", "urso", "uivar", "unir",
                "vela", "valeta", "vacilo", "valor", "vagem", "vadiagem", "vaca", "valentia", "vidro", "valsa",
                "xadrez", "xilofone", "xarope", "xenofobia", "xereta", "xerife", "xaveco", "xixi", "xale",
                "zebra", "zagueiro", "zero", "zoeira", "zepelim", "zinco", "zumbido"
            ]
            
            export default palavras
            ```
            
        - Esse array possui strings que serão as palavras que o jogador deverá adivinhar. Você deverá importar esse array no componente `App` para utilizá-lo.
        - Você não deve mudar o nome do array! Mas se quiser mudar o conteúdo para adicionar palavras, fique à vontade 😄
    - [x]  Os botões de letras devem ser mapeados através de um array do alfabeto
        - Array do alfabeto
            
            ```jsx
            const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
            ```
            
    - [x]  Antes de o jogo iniciar, o input e os botões de letras devem estar desabilitados
- Ao apertar “escolher palavra”
    - [x]  Input e letras passam a ficar habilitadas
    - [x]  A contagem de erros nesse momento é 0, a imagem da forca vazia é mostrada
    - [x]  Você deve sortear uma das palavras do array que está no arquivo `palavras.js` para o usuário tentar adivinhar
    - [x]  Aparece a palavra a ser adivinhada na tela, com um underline ( `_` ) para cada letra que a palavra possui
    - 💡Dica
        
        Se você transformar a palavra em um array, será muito mais fácil de fazer as operações e comparações que irão acontecer no jogo 😉
        
- Ao pressionar uma letra
    - [x]  O botão de uma letra já clicada deve ficar desabilitado
    - [x]  Se a palavra escolhida no jogo tiver a letra que o usuário apertou:
        - [x]  O underline da posição correspondente à letra deve ser substituído pela letra em si
        - [x]  As palavras disponibilizadas não possuem caracteres especiais, então não precisa se preocupar com isso!
    - [x]  Se a palavra escolhida no jogo NÃO tiver a letra que o usuário apertou:
        - [x]  Sua contagem de erros deve aumentar
            - [x]  A imagem na forca deve mudar (forca0 > forca1 > forca2… e assim sucessivamente)
- Input de chute
    - [x]  Caso o usuário deseje, ele pode chutar a palavra inteira no input
    - [x]  Ao fazer isso, se acertar a palavra, ele ganha imediatamente
    - [x]  Mas, se errar, ele perde imediatamente, independente da contagem anterior de erros. A imagem que deve aparecer nesse momento é a do bonequinho enforcado (forca6)
- Fim de jogo
    - [x]  Botões de letras e input de chute devem ser desabilitados
    - [x]  Caso o usuário ganhe:
        - [x]  Quando o usuário ganha, a palavra completa fica em **verde** e os botões e input voltam a ficar desabilitados
        - [x]  Para continuar a jogar, o usuário deve apertar o botão “Escolher Palavra”, e o jogo será reiniciado do zero
    - [x]  Caso o usuário perca:
        - [x]  A imagem final que deve aparecer é a do boneco enforcado (forca6)
        - [x]  A palavra deve ser revelada, mas em **vermelho**
        
    - 💡 Para saber se realmente o seletor está inserido, você pode inspecionar o elemento na tela
        
        ![indefier.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bdcf05dd-c3ca-4a2f-94d5-4be335ea9275/indefier.gif)
        
    - **E se eu estiver usando Styled Components? (bônus)**
        
        Nesse caso, você pode sim colocar o data-identifier na tag do componente! Isso porque o styled components automaticamente repassa todos os atributos pra tag HTML final:
        
        ```jsx
        const MeuLindoBotao = styled.button`...`;
        
        <MeuLindoBotao data-identifier="blabla" /> (CORRETO!)
        ```
        
    - **E se eu quiser componentizar um botão pra ser usado em vários lugares com data-identifiers diferentes?**
        
        Nesse caso, você pode repassar todas as props pra tag HTML final de uma forma bem prática:
        
        ```jsx
        // No componente do botão:
        function BotaoCustomizado({ props }) {
        	return <button {...props}>...</button>
        }
        
        // Onde for usar o componente:
        <BotaoCustomizado data-identifier="blabla" />
        <BotaoCustomizado data-identifier="blublu" />
        ```
