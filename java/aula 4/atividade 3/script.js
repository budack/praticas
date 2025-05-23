let Primeira_nota = document.querySelector("#Pn");
let Segunda_nota = document.querySelector("#Ps");
let Terceira_nota = document.querySelector("#Pt")
let resultado_media = document.querySelector("#resultado_media");
let botao = document.querySelector("#btCauculo"); 
let resultado_media_empoderada = document.querySelector("#resultado_media_empoderada");
let resuldo_soma_das_medias = document.querySelector("#resuldo_soma_das_medias");
let media_das_medias = document.querySelector("#media_das_medias");

function calcularMedia() {
    let Media1 = (Number(Primeira_nota.value) + Number(Segunda_nota.value) + Number(Terceira_nota.value)) / 3;
    resultado_media.textContent = "A media Aritimedica é: " + Media1;
    let media2 =  ((Number(Primeira_nota.value) * 3) + (Number(Segunda_nota.value) * 2) + (Number(Terceira_nota.value) * 5)) / 10;
    resultado_media_empoderada.textContent = "A media Ponderada é " + media2;
    let soma = Media1 + media2;
    resuldo_soma_das_medias.textContent = "A soma das medias é: " + soma;
    let media = soma / 2;
    media_das_medias.textContent = "A media das medias é: " + media;
}

botao.onclick = function() {
    calcularMedia();
} 