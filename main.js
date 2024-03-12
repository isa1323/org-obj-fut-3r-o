const botoes = document.querySelectorAll(".botao");

for (let i = o; i < botoes.length; j++){
    botoes[i].onclick = function(){
        for(let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove(ativo);
        }
        botoes[i].classList.add("ativo")
    }
}