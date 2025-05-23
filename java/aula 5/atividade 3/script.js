let soma = document.getElementById("soma");
let subtracao = document.getElementById("subtracao");
let multiplicacao  = document.getElementById("multiplicacao");
let divisao = document.getElementById("divisao");
let numeros_inteiros = document.getElementById("numeros_inteiros");
let calcular = document.getElementById("calcular");

function calculadora(){
    soma.textContent = Number(numeros_inteiros.value) + Number(numeros_inteiros.value);
    subtracao.textContent = Number(numeros_inteiros.value) - Number(numeros_inteiros.value);
    multiplicacao.textContent = Number(numeros_inteiros.value) * Number(numeros_inteiros.value);
    divisao.textContent = Number(numeros_inteiros.value) / Number(numeros_inteiros.value);
}

calcular.onclick = function(){
    calculadora();
}