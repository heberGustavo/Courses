"use strict";
// ================== ANNOTATION ================== //
// ===> VARIAVEIS
let primeiroNome = "Heber";
let idade = 22;
let altura = 1.70;
let estudando = true;
// ===> ARRAYS
let arrayDeNumeros = [1, 2, 3, 4, 5];
let arrayDeStrings = ["Heber", "Gustavo", "Cruz"];
let arrayDeBoolean = [true, false, true, false];
// ===> OBJETOS
let pessoa;
pessoa: pessoa = {
    nome: "Heber",
    idade: 27,
    altura: 1.80,
    estudando: true
};
console.log(`Os dados completo da pessoa em JSON: ${JSON.stringify(pessoa)}`);
// ===> FUNÇÕES
function multiplicarNumeros(num1, num2) {
    return num1 * num2;
}
console.log(`A multiplicação dos números tem o resultado: ${multiplicarNumeros(1.5, 10)}`);
