"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 Crie um código com Node.js e Typescript que vai solicitar ao usuário um
nome, 4 notas de 0 a 10 e no final vai devolver no console um objeto com o
nome do aluno, suas 4 notas e a média final calculada.

Você deve utilizar uma Interface para definir os detalhes do objeto aluno e
criar uma função calcularMedia() que recebe um array com 4 notas e faz o
cálculo da média. Os valores serão digitados pelo usuário e podem ser
capturados usando a biblioteca prompt-sync
 */
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const nomeAluno = prompt("Digite o nome do aluno: ");
let notasArray = [];
for (let i = 0; i < 4; i++) {
    let nota = parseFloat(prompt(`De 0 a 10, digite o valor da ${i + 1}ª nota: `));
    notasArray.push(nota);
}
function calculaMedia(notasCalculo) {
    let soma = 0;
    for (let i = 0; i < notasCalculo.length; i++) {
        soma += notasCalculo[i];
    }
    return soma / notasCalculo.length;
}
const aluno = {
    nome: nomeAluno,
    notas: notasArray,
    mediaFinal: calculaMedia(notasArray)
};
console.log(aluno);
