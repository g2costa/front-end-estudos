const botaoAdicionar = document.getElementById("bt-adicionar")
const boxContainer = document.getElementById("box-container")
var numeroIndex = 1

botaoAdicionar.addEventListener("click", adicionarBox)

function adicionarBox(){
    // Criando a DIV box
    const singleBox = document.createElement("box")
    singleBox.classList.add("box")

    //Criando o Paragravo
    const numeroDoBox = document.createElement("p")
    numeroDoBox.classList.add("box-numero")
    numeroDoBox.innerText = numeroIndex
    numeroIndex += 1

    singleBox.appendChild(numeroDoBox)
    boxContainer.appendChild(singleBox)

}