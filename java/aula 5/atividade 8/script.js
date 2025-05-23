let nome = document.querySelector("#nome")
let data_nascimento = document.querySelector("#data_nascimento")
let resultado = document.querySelector("#resultado")
let bt = document.querySelector("#bt")

function calcular(){
    let nome_usuario = nome.value;
    let ano_nascimento = Number(data_nascimento.value);
    let idade = 2025 - ano_nascimento;
    let dias = idade * 365
    resultado.textContent = nome_usuario + ", você viveu por " + dias + " dias";
}

bt.onclick = function(){
    calcular()
}