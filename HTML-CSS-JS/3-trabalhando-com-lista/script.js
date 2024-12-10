const lista = document.getElementById("lista-de-compras")
const item = document.getElementById("input-item-field")
const botaoSalvar = document.getElementById("bt-salvar")


botaoSalvar.addEventListener("click", salvarItem)

function salvarItem(evento){
    const intemLi = document.createElement("li")
    const nomeItem = document.createElement("p")
    nomeItem.innerText = item.value
    intemLi.appendChild(nomeItem)
    lista.append(intemLi)
    item.value = ""
}