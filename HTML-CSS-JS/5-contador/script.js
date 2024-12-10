
const numero = document.getElementById("numero")
const boxContainer = document.getElementById("box")

boxContainer.addEventListener("click", incrementarNumero)


var contador = 1
function incrementarNumero(){
    numero.innerText = contador
    contador += 1
}
