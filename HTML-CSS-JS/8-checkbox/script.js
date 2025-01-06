const emptyIcon = document.getElementById("checkbox-icon")
const mark = document.getElementById("checkbox-mark")

emptyIcon.addEventListener("click", marcar)

clique = false

function marcar(){
    
    if (clique == true){
        // Trata o comportamento do icone geral do checkbox
        emptyIcon.classList.remove("checkbox-style-checked")
        emptyIcon.classList.add("checkbox-style")

        // Trata a visibilidade do icone de OK do checkbox
        mark.classList.remove("check-mark-checked")
        mark.classList.add("check-mark")
        clique = false
        
    }else{
        // Trata o comportamento do icone geral do checkbox
        emptyIcon.classList.remove("checkbox-style")
        emptyIcon.classList.add("checkbox-style-checked")

        // Trata a visibilidade do icone de OK do checkbox
        mark.classList.remove("check-mark")
        mark.classList.add("check-mark-checked")
        clique = true
    }
}