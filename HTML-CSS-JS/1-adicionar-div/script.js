const botaoAdicionar = document.getElementById("bt-adicionar");
botaoAdicionar.addEventListener("click", adicionarDiv);

const containerDiv = document.getElementById("box-grid")

function adicionarDiv(){
    const oneBox = document.createElement("div")
    oneBox.classList.add("box")
    containerDiv.appendChild(oneBox)
}