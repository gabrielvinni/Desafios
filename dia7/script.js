function procurar() {
    var ptxt = document.getElementById("procurar-txt");
    ptxt.classList.toggle("ativo")
}

function abrirmenu() {
    var painel = document.getElementById("painel")
    var menu = document.getElementById("menu")

    painel.classList.toggle("painel-direita")
    menu.classList.toggle("menu-esquerda")
}