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
const nota01 = parseFloat(prompt("Digite o valor da 1ª nota: "));
const nota02 = parseFloat(prompt("Digite o valor da 2ª nota: "));
const nota03 = parseFloat(prompt("Digite o valor da 3ª nota: "));
const nota04 = parseFloat(prompt("Digite o valor da 4ª nota: "));
function calculaMedia(nota1, nota2, nota3, nota4) {
    return (nota1 + nota2 + nota3 + nota4) / 4;
}
const aluno = {
    nome: nomeAluno,
    notas: [nota01, nota02, nota03, nota04],
    mediaFinal: calculaMedia(nota01, nota02, nota03, nota04)
};
console.log(aluno);
