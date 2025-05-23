let valorR = document.querySelector("#valorRecebido");
let valorC = document.querySelector("#valorCompra");
let resultado = document.querySelector("#resultado");
let btCalcular = document.querySelector("#caucular");

function calcular(){
    let v1 = Number(valorR.value);
    let v2 = Number(valorC.value);

    let R = v1 - v2;

    if (v1 < v2) {
        resultado.textContent = "O valor recebido é menor que o valor de compra!";
    } 
    else{
        resultado.textContent = R;
    }
}

caucular.onclick = function(){
    calcular();
}
