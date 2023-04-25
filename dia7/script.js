let ativo = 0
let ptxt = document.getElementById("procurar-txt")
let btmn = document.getElementById("bt-menu")

function procurar() {
    if (ativo == 1) {
        ativo = 0
        ptxt.style.translate = "20px"
        ptxt.style.opacity = "0"
        btmn.style.opacity = "1"
        ptxt.style.visibility = "hidden"
        btmn.style.visibility = "visible"
    } else {
        ativo = 1
        ptxt.style.translate = "0px"
        ptxt.style.opacity = "1"
        btmn.style.opacity = "0"
        ptxt.style.visibility = "visible"
        btmn.style.visibility = "hidden"
    }
}