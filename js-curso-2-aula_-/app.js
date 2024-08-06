function multiplicarNumero(a) {
   return a*a;
}
let numero = multiplicarNumero(10);
console.log(numero);

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';


function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}