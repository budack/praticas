let babysad = document.querySelector("#babysad");
let nanana = document.querySelector("#nanana");
let bangbang = document.querySelector("#bangbang");
let go = document.querySelector("#go");

function start(){
    nanana.textContent = (Number(babysad.value) * 2) + " ovos ao todo";
    bangbang.textContent = (Number(babysad.value) * 50) + " gramas ao todo";
}

go.onclick = function(){
    start();
}