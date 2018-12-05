var relogio = document.querySelector("#tempo");
var intervalId;

function iniciaTempo(){
    intervalId = setInterval("calculaTempo();", 1000);
    botaoInicio.removeEventListener("click", loopTeste);
}

function paraTempo(){
    clearInterval(intervalId);
    // botaoPara.removeEventListener("click", paraTempo);
}

var botaoInicio = document.querySelector("#inicio");
botaoInicio.addEventListener("click", iniciaTempo);

var botaoPara = document.querySelector("#para");
botaoPara.addEventListener("click", paraTempo);

var segundos = 0;
var minutos = 0
var horas = 0;
var aux;

function calculaTempo(){
    segundos++;

    aux = segundos;
    horas = Math.floor(aux / 3600);
    aux = aux % 3600;
    minutos = Math.floor(aux / 60);
    aux = aux % 60;

    // relogio.textContent = horas + ":" + minutos + ":" + aux;
    relogio.textContent = pad2(horas) + ":" + pad2(minutos) + ":" + pad2(aux);
}


// https://www.electrictoolbox.com/pad-number-two-digits-javascript/
function pad2(number) {
   
    return (number < 10 ? '0' : '') + number
  
}