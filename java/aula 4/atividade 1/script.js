let kilovalor = document.querySelector("#kilovalor");
let kiuloconsumido = document.querySelector("#kiuloconsumido");
let resuldado = document.querySelector("#resuldado");
let calcule = document.querySelector("#calcule");

function calcular(){
    resuldado.textContent = Number(kilovalor.value) * Number(kiuloconsumido.value) + ",00";

}

calcule.onclick = function(){
    calcular();
}