//capturar o elemento botao do dom
const bt01 = document.querySelector("#bt01")

const pesquisarTermo = (termo, lista) => {
    for(let i=0;i<lista.length;i++) {
        let objeto = lista[i]
        if(objeto.termo == termo)
            return i
    }
    return -1
}

const exibeTermos = lista => {
    const tbodyElem = document.querySelector("#resultado01")
    tbodyElem.innerHTML = ""
    for(let i=0; i<lista.length; i++) {
        let objeto = lista[i]
        let termo = objeto.termo
        let numVezes = objeto.ocorrencia
        tbodyElem.innerHTML += `<tr>
                                    <td>${termo}</td>
                                    <td>${numVezes}</td>
                                </tr>`
    }
    
}

const contaVogais = texto => {
    let totalDeVogais = 0
    for(let i=0; i<texto.length; i++) {
        if(("aàáâãeéêiíoóôõuúü").indexOf(texto[i].toLowerCase()) >=0) 
            totalDeVogais++
    }
    return totalDeVogais
}

const criarTermoOcorrencia = palavra => {
    return {termo: palavra, ocorrencia: 1}
}

const corrigirPalavra = palavra => {
    const caracteresEspeciais = ".,;:?!@#$%&* /()[]{}-+=\"\'"
    if(caracteresEspeciais.indexOf(palavra[0])!= -1)
        palavra = palavra.slice(1,-1)
    if(caracteresEspeciais.indexOf(palavra[palavra.length-1])!= -1) {
        //console.log("Palavra defeituosa", palavra)
        palavra = palavra.slice(0,-1)
        //console.log("Palavra corrigida", palavra)
    }
    return palavra
}
/**
 * Funcao para contar o numero de palavras de um texto   passado como parâmetro
 * 
 * @param texto - String
 * 
 * @return {termo1:ocorrencia1, termo2:ocorrencia2...} - Object
 *  [{termo: "palavra", ocorrencia:3}]
 */
const contarPalavras = texto => {
    //transformar texto em um array de palavras
    const textoEmMinusculo = texto.toLowerCase() 
    const listaDePalavras = textoEmMinusculo.split(" ")
    //corrigir a lista de palavras, removendo ,.": do fim das palavras
    const listaPalavrasCorrigidas = []
    for (let i=0;i<listaDePalavras.length;i++) {
        listaPalavrasCorrigidas[i] = corrigirPalavra(listaDePalavras[i])
    }

    //console.log(listaDePalavras)
    let resultado = []
    //percorrer esse array de palavras
    for (let i=0;i<listaPalavrasCorrigidas.length; i++) {
        //contar as ocorrencias
        let indice = pesquisarTermo(listaPalavrasCorrigidas[i], resultado)
        //se o termo existir em resultado
        if(indice >= 0) { //incrementar ocorrencia++
            resultado[indice].ocorrencia++
        } else { //caso contrário
            //adicionar o novo termo e ocorrencia = 1
            resultado.push(criarTermoOcorrencia(listaDePalavras[i]))
        }
    }
    //console.log("array resultado", resultado)
    return resultado
}

const contaLetras = texto => {
    const listaTermos = texto.split(" ")
    let numLetras = 0
    for (let i=0; i< listaTermos.length; i++)
        numLetras += listaTermos[i].length
    return numLetras
}

//programar o evento
//ao clicar no botao
bt01.addEventListener("click", function(){
    //recuperar o texto digitado
    const texto = document.querySelector("#ex01").value
    
    //contaPalavras
    let estatisticas = contarPalavras(texto)
    exibeTermos(estatisticas)
    
    document.querySelector("#result-total-letras").innerHTML = contaLetras(texto)
    document.querySelector("#result-total-vogais").innerHTML = contaVogais(texto)
    document.querySelector("#result-total-palavras").innerHTML = estatisticas.length
    
})

/**
 * @TODO
    -> Ordenar as palavras mais recorrentes
    -> Letra mais comum
/*

Exercicio 2
*/

let endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};
let listaEnd = [{rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP", 
    interesses:["IA", "DevOps"]}, 
    {rua: "Av. Gov R. Silveira",
    numero: 2000,
    bairro: "Prado",
    cidade: "Nova Friburgo",
    uf: "RJ",
    interesses:["Web3", "Big Data", "IA"]}
]
const bt02 = document.querySelector("#bt02")
const bt02b = document.querySelector("#bt02b")

const geraFrase = endereco => {
    return `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua "${endereco.rua}" com nº ${endereco.numero}.` 
}

bt02.addEventListener("click", function(){
    const pResposta = document.querySelector("#result02")

    pResposta.innerHTML = geraFrase(endereco)
})

const geraInteresse = interesseList => {
    let ulElem = "<ul>"
    for(let i=0;i<interesseList.length;i++) {
        ulElem += `<li>${interesseList[i]}</li>`
    }
    ulElem += "</ul>"
    return ulElem
}

bt02b.addEventListener("click", function(){
    const resp02b = document.querySelector("#resp02b")

    for(let i=0;i<listaEnd.length;i++){
        const ender = listaEnd[i]
        frase = geraFrase(ender)
        resp02b.innerHTML += `<p>${frase}</p>`
        resp02b.innerHTML += geraInteresse(ender.interesses)
    }
})
