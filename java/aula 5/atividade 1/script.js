let valor_dolar = document.querySelector("#valor_dolar");
let cotacao1 = document.querySelector("#cotacao1");
let cotacao2 = document.querySelector("#cotacao2");
let cotacao3 = document.querySelector("#cotacao3");
let cotacao4 = document.querySelector("#cotacao4");
let bt = document.querySelector("#bt")

function auteracao_dolar(){
    let dolar1 = Number(valor_dolar.value) * 1.01;
    let dolar2 = Number(valor_dolar.value) * 1.02;
    let dolar3 = Number(valor_dolar.value) * 1.05;
    let dolar4 = Number(valor_dolar.value) * 1.10;

    cotacao1.textContent = dolar1;
    cotacao2.textContent = dolar2;
    cotacao3.textContent = dolar3;
    cotacao4.textContent = dolar4;
}

bt.onclick = function(){
    auteracao_dolar();
}