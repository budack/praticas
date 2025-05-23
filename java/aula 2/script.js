let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let btSomar = document.querySelector("#btSoma");
let resultado = document.querySelector("#resultado");

function somar(){
    let v1 = valor1.value;
    let v2 = valor2.value;

    let R = parseFloat(v1) + parseFloat(v2);

    resultado.textContent = R;
}

btSomar.onclick = function(){
    somar();
}