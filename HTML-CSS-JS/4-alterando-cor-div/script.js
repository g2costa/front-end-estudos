const boxDiv = document.getElementById("box")


boxDiv.addEventListener("click", trocarCor)


var colorDivDefault = 1

function trocarCor(){
    if(colorDivDefault == 1){
        boxDiv.classList.remove("style-1")
        boxDiv.classList.add("style-2")
        colorDivDefault = 0
    }else{
        boxDiv.classList.remove("style-2")
        boxDiv.classList.add("style-1")
        colorDivDefault = 1
    }
}