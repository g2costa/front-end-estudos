const itemCheck = document.getElementById("item-check")
itemCheck.addEventListener("click", marcar)

marcado = false
function marcar(){
    if (marcado == true){
        itemCheck.classList.remove("checked-style")
        marcado = false
    }else{
        itemCheck.classList.add("checked-style")
        marcado = true
    }
}