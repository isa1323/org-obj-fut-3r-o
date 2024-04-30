const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo")

for (let i = 0; i<botoes.length; i++) {
    botoes [i].onclick = function(){
        for(let j=0; j<botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-14-12T23:59:59");
const tempoObjetivo2 = new Date("2024-22-07T23:59:59");
const tempoObjetivo3 = new Date("2024-25-11T23:59:59");
const tempoObjetivo4 = new Date("2024-31-12T23:59:59");

const tempos = [
    tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4
]

for(let i=0; i< contadores.length; i++){
    conatdores[i].textContent = calculaTempo(tempo[i]);
}
contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoobjectivo1){
    let tempoAtual = new Date();
    let tempoFinal= tempoObjetivo1 - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return dia + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
}