const botao = document.getElementById("botao")
const barr1 = document.getElementById("barr1")
const barr2 = document.getElementById("barr2")
const barr3 = document.getElementById("barr3")

botao.addEventListener("click", () => {
    barr1.classList.toggle("barra1")
    barr2.classList.toggle("barra2")
    barr3.classList.toggle("barra3")
})