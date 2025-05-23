let cavalo = document.querySelector("#cavalo");
let ferradura = document.querySelector("#ferradura");
let bt = document.querySelector("#bt");

function quantidade_de_ferraduras(){
    ferradura.textContent = cavalo.value * 4
}

bt.onclick = function(){
    quantidade_de_ferraduras()
}