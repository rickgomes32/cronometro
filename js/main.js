"use strict";

var relogio = document.querySelector("#tempo");
var botaoInicio = document.querySelector("#inicio");
var botaoPara = document.querySelector("#para");
var botaoPausa = document.querySelector("#pausa");
var intervalId;
var segundos = 0;
var minutos = 0
var horas = 0;
var aux;

botaoInicio.addEventListener("click", iniciaTempo);
botaoPara.addEventListener("click", paraTempo);
botaoPausa.addEventListener("click", resetTempo);

function iniciaTempo(){
    // Retorna ID do intervalo para ser limpo quando pausar ou parar o cronômetro
    intervalId = setInterval("calculaTempo();", 1000);
    // Retira listener da evitar mais de uma função rodando junta.
    botaoInicio.removeEventListener("click", iniciaTempo);
}

function paraTempo(){
    // Para a função calculaTempo()
    clearInterval(intervalId);
    botaoInicio.addEventListener("click", iniciaTempo);
}

function resetTempo(){
    // Invoca a função para para a função calculaTempo() e zera as variáveis de controle do tempo.
    paraTempo();
    segundos = minutos = horas = aux = 0;
    relogio.textContent = pad2(horas) + ":" + pad2(minutos) + ":" + pad2(aux);
}

function calculaTempo(){
    segundos++;

    aux = segundos;
    horas = Math.floor(aux / 3600);
    aux = aux % 3600;
    minutos = Math.floor(aux / 60);
    aux = aux % 60;

    relogio.textContent = pad2(horas) + ":" + pad2(minutos) + ":" + pad2(aux);
}

// https://www.electrictoolbox.com/pad-number-two-digits-javascript/
function pad2(number) {
    // Se no valor houver numero de um digito, adiciona zero para ficar 00:00:00
    return (number < 10 ? '0' : '') + number
}