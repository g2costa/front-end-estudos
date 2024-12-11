const botaoSubtrair = document.getElementById("left-arrow-rail")
const botaoAdicionar = document.getElementById("right-arrow-rail")
var display = document.getElementById("display-number")


botaoAdicionar.addEventListener("click", adicionarUnidade)
botaoSubtrair.addEventListener("click", subtrairUnidade)



var contador = 0
display.innerText = contador

function adicionarUnidade(){
    contador +=1
    display.innerText = contador
}

function subtrairUnidade(){
    contador -=1
    display.innerText = contador
}