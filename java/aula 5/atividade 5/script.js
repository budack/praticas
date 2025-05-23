
let Primeiro_lado = document.querySelector("#Primeiro_lado")
let Segundo_lado = document.querySelector("#Segundo_lado")
let Terceiro_lado = document.querySelector("#Terceiro_lado")
let resultado = document.querySelector("#resultado")
let Butao_calcular = document.querySelector("#Butao_calcular")

function sei_la(){
    let lado1 = Number(Primeiro_lado.value)
    let lado2 = Number(Segundo_lado.value)
    let lado3 = Number(Terceiro_lado.value)
    let semi_area = (lado1 + lado2 + lado3) / 2
    let area = Math.sqrt(semi_area * (semi_area - lado1) * (semi_area - lado2) * (semi_area - lado3)) 
    resultado.textContent = area
}

Butao_calcular.onclick = function(){
    sei_la()
}
