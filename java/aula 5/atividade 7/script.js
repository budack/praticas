let quantidade_pao = document.querySelector("#quantidade_pao")
let venda_de_pao = document.querySelector("#venda_de_pao")
let valor_investido = document.querySelector("#valor_investido")
let quantidade_broa = document.querySelector("#quantidade_broa")
let venda_de_broa = document.querySelector("#venda_de_broa")
let bt_calcular = document.querySelector("#bt_calcular")
let venda_total = document.querySelector("#venda_total")

function calcular_tudo(){
    let venda_de_pao_total = Number(quantidade_pao.value) * 0.12
    let venda_de_broa_total = Number(quantidade_broa.value) * 1.50

    venda_de_pao.textContent = venda_de_pao_total.toFixed(2)
    venda_de_broa.textContent = venda_de_broa_total.toFixed(2)

    venda_total.textContent = venda_de_pao_total + venda_de_broa_total

    let investido = (venda_de_broa_total = venda_de_pao_total) * 0.10
    valor_investido.textContent = investido.toFixed(2)
}

bt_calcular.onclick = function(){
    calcular_tudo()
}