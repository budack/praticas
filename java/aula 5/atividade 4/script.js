let quantidade_de_pizzas = document.querySelector("#quantidade_de_pizzas");
let Quantidade_de_refrigerantes = document.querySelector("#Quantidade_de_refrigerantes");
let resultado_pizzas = document.querySelector("#resultado_pizzas");
let resultado_refrigerantes = document.querySelector("#resultado_refrigerantes");
let calcular = document.querySelector("#calcular");

function calculo_valor_pizza(){
    let quantidade = Number(quantidade_de_pizzas.value);

    if (quantidade === 1){
        resultado_pizzas.textContent = " A pizza deu R$ 12,00";
    }

    else if (quantidade === 2){
        resultado_pizzas.textContent = " A pizza deu R$ 24,00";
    }

    else if (quantidade === 3){
        resultado_pizzas.textContent = " A pizza deu R$ 36,00";
    }

    else if (quantidade === 4){
        resultado_pizzas.textContent = " A pizza deu R$ 48,00";
    }

    else {
        resultado_pizzas.textContent = "coloque um valor valido";
    }
}

function calculo_valor_refrigerante() {
    let quantidade = Number(Quantidade_de_refrigerantes.value);
    let valor_total_refrigerante = quantidade * 7.00;
    resultado_refrigerantes.textContent = "O refrigerante deu R$ " + valor_total_refrigerante.toFixed(2);
}

calcular.onclick = function () {
    calculo_valor_pizza();
    calculo_valor_refrigerante();
};