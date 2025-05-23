let valorOriginal = document.querySelector("#numero")
let resultado = document.querySelector("#resultado")
let caucular = document.querySelector("#caucular")

function converter() {
    resultado.textContent = Number(valorOriginal.value) * 1.01;
}

caucular.onclick = function() {
    converter();
}