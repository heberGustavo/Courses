"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../../utils/utils"));
// ===> Exemplo 01 - Uso simples de Tuplas em TypeScript
(0, utils_1.default)("=== Exemplo 01 - Uso simples de Tuplas em TypeScript ===");
let tuplePessoa;
tuplePessoa = ['Heber', 'Dev', 99];
console.log(tuplePessoa);
// ===> Exemplo 02 - Acessando o valor da Tupla
(0, utils_1.default)("=== Exemplo 02 - Acessando o valor da Tupla ===");
console.log(tuplePessoa[0]);
// ===> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
(0, utils_1.default)("=== Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels) === ");
let pessoaEmpresa;
pessoaEmpresa = ['Heber', 'Google', 2031];
console.log(pessoaEmpresa);
// ===> Exemplo 04 - Usando Tuplas com Spread Operator
(0, utils_1.default)("=== Exemplo 04 - Usando Tuplas com Spread Operator ===");
let grupoFrutas;
grupoFrutas = ['Acabate', 'Abobora', 'Melão', 'Pera', 'Goiaba', 'Tomate'];
console.log(grupoFrutas);
// ===> Exemplo 05 - Lista Heterogênea de Tupla:
(0, utils_1.default)("=== Exemplo 05 - Lista Heterogênea de Tupla ===");
let listraFrutas2;
listraFrutas2 = [true, 83.10, ...grupoFrutas];
console.log(listraFrutas2);
// ===> Exemplo 06 - Uso de função com Tuplas
(0, utils_1.default)("=== Exemplo 06 - Uso de função com Tuplas ===");
function retornarPessoas(nome, idade) {
    return [...nome, ...idade];
}
let resultadoPessoas = retornarPessoas(['Heber', 'Priscila'], [27, 22]);
console.log(resultadoPessoas);
// ===> Exemplo 07 - Labeled Tuples com Spread Operator numa função
(0, utils_1.default)("=== Exemplo 07 - Labeled Tuples com Spread Operator numa função ===");
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa("Heber", "Da Cruz"));
console.log(criarPessoa("Heber", "Gustavo", "Da Cruz"));
