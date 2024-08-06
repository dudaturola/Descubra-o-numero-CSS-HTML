let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado');
};

function exibirAlerta() {
    alert('Eu amo JS');
}

// function exibirPrompt() {
//     let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
//     alert(`Estive em ${nomeDaCidade} e lembrei de você`)
// }

// function somarValores() {
//     let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
//     let segundoNumero = parseInt(prompt('Digite o segundo número'));
//     let resultado = primeiroNumero + segundoNumero;
//     alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
// }

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');