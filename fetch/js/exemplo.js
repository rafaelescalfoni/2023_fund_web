const loadRecipe = (recipeList) => {
    const divResp = document.querySelector("#resultado")
    recipeList.forEach(recipe => {
        divResp.innerHTML += `<h1>${recipe.nome}</h1>`
    })
    
}

if(self.fetch) {
    // execute algo com a fetch api 
    const url = "https://rafaelescalfoni.github.io/desenv_web/receitas.json"
    
    fetch(url) //Promise que envia a requisicao para url
        .then(response => response.json()) // resposta em processamento
        .then(listaDeReceitas => { // resposta pronta para ser consumida
            loadRecipe(listaDeReceitas)
        })
        .catch(erro => {
            console.log(`Deu zebra: ${erro}`)
        })

} else {
    // use o objeto XMLHttpRequest
}