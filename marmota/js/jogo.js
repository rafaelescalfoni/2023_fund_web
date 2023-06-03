const btnTeste = document.querySelector("#teste")
const tabuleiro = document.querySelector(".game")

// define se o jogo ainda está valendo
let tempoTerminou = false

const removeMarmota = buraco => { buraco.classList.remove("up") }

const pontuar = () => {
    const placar = document.querySelector(".score")
    placar.innerHTML = parseInt(placar.innerHTML) + 1
}

const sorteiaBuraco = () => {
    const num = Math.trunc(Math.random() * 6) + 1
    return document.querySelector(`.hole${num}`)
}

const defineTempo = (min, max) => Math.round((Math.random()*(max-min))+min)

const exibeMarmota = () => {
    const buraco = sorteiaBuraco()
    buraco.classList.add("up")
    
    const tempoExposicao = defineTempo(300, 1000)
    
    setTimeout(function() {
        removeMarmota(buraco)
        if(!tempoTerminou) { // Enquanto o tempo estiver valendo (True)
            exibeMarmota() // >> chamada recursiva <<
        } else alert("fim do jogo!") 
    }, tempoExposicao)
}

btnTeste.addEventListener("click", function(){
    //inicializando o jogo
    document.querySelector(".score").innerHTML = "0"
    tempoTerminou = false //comecando a partida!

    exibeMarmota()
    setTimeout(() => tempoTerminou = true, 10000) // jogo durando 10s
})
let ultimaMarmota // controla a ultima marmota clicada
//ao clicar na classe mole
tabuleiro.addEventListener("click", function(e){
    const elemClicado = e.target
    //se o elemClicado for a marmota (.mole)
    if(elemClicado.classList.contains("mole") // e uma marmota
            && ultimaMarmota != elemClicado) { // não foi a ult clicada
        pontuar()
        ultimaMarmota = elemClicado
    }
})
    // - pontuar